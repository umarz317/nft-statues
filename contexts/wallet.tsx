import { Provider, ethers } from "ethers";
import {
  FC,
  ReactNode,
  createContext,
  use,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAccount, useAccountEffect, useSignMessage } from "wagmi";

type TWalletContext = {
  // walletAddress: string | null;
  nfts: Nft[] | null;
  // handleMetamaskConnection?: () => void;
};
const WalletContext = createContext<TWalletContext>({
  // walletAddress: null,
  nfts: null,
});

type Props = {
  children: ReactNode;
};
export const WalletProvider: FC<Props> = ({ children }) => {
  const { address } = useAccount();
  const [nfts, setNfts] = useState<Nft[] | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { signMessageAsync, status } = useSignMessage();

  const sendToApi = useCallback(
    async (
      path: `/${string}`,
      options?: {
        method: string;
        headers?: Record<string, string>;
        body?: string;
      }
    ) => {
      if (typeof window !== "undefined") {
        const response = await fetch(`${window.location.origin}${path}`, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...(options?.headers ?? {}),
          },
        }).then((res) => res.json());

        return response;
      }
    },

    [token]
  );

  const getNfts = useCallback(async () => {
    if (typeof window !== "undefined") {
      if (token) {
        const response: { data: { nfts: Nft[] } } = await sendToApi(
          `/api/load-nfts`,
          {
            method: "GET",
          }
        );
        if (response?.data?.nfts) {
          setNfts(response.data.nfts);
        }
      }
    }
  }, [sendToApi, token]);

  useAccountEffect({
    onConnect: async (data) => {
      console.log(token,data?.address)
      if (data?.address) {
        if(token) return
        var address = data.address
        const nonceData = (await sendToApi(`/api/nonce`, {
          method: "POST",
        })) as { nonce: string };

        const message = `I am signing this message to prove my identity. Nonce: ${nonceData.nonce}`;
        try {
          const signedMessage = await signMessageAsync({ message: message });

          const loginData = { signedMessage, message, address };

          const tokenData = (await sendToApi(`/api/login`, {
            method: "POST",
            body: JSON.stringify(loginData),
          })) as { token: string };

          window.localStorage.setItem("accessToken", tokenData.token);
          setToken(tokenData.token);
        } catch (e) {
          console.log(e);
        }
      }
    },onDisconnect: async () => {
      window.localStorage.setItem("accessToken", "");
    }
  });



  // const handleMetamaskConnection = useCallback(async () => {
  //   if (typeof window !== "undefined") {
  //     if ((window as any).ethereum) {
  //       try {
  //         const data = await (window as any).ethereum.request({
  //           method: "eth_requestAccounts",
  //         });

  //         setWalletAddress(data[0]);

  //         const nonceData = (await sendToApi(`/api/nonce`, {
  //           method: "POST",
  //         })) as { nonce: string };
  //         const provider = new ethers.BrowserProvider((window as any).ethereum);
  //         const signer = await provider.getSigner();
  //         const address = await signer.getAddress();

  //         const message = `I am signing this message to prove my identity. Nonce: ${nonceData.nonce}`;

  //         const signedMessage = await signer.signMessage(message);

  //         const loginData = { signedMessage, message, address };

  //         const tokenData = (await sendToApi(`/api/login`, {
  //           method: "POST",
  //           body: JSON.stringify(loginData),
  //         })) as { token: string };

  //         window.localStorage.setItem("accessToken", tokenData.token);
  //         setToken(tokenData.token);
  //       } catch (error) {
  //         console.error("Error connecting to MetaMask:", error);
  //       }
  //     } else {
  //       window.alert("Please install Metamask");
  //     }
  //   }
  // }, [sendToApi, setWalletAddress]);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const tkn = window.localStorage.getItem("accessToken") as string | null;
        if (tkn) {
          const verify = await sendToApi("/api/verify", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${tkn}`,
            },
          });
          if (verify.status === "ok") {
            // setWalletAddress(verify.data.address);
            setToken(tkn);
          } else {
            // await handleMetamaskConnection();
          }

          await getNfts();
        }
      }
    })();
  }, [sendToApi, getNfts]);

  return (
    <WalletContext.Provider value={{ nfts }}>{children}</WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);

  return context;
};

export interface Nft {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: null | string;
  description: null | string;
  image_url: null | string;
  metadata_url: null | string;
  opensea_url: string;
  updated_at: Date;
  is_disabled: boolean;
  is_nsfw: boolean;
}
