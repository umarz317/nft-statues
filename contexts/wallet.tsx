import { FC, ReactNode, createContext, useContext, useState } from "react";
type TWalletContext = {
  walletAddress: string | null;
  nfts: Nft[] | null;
  handleMetamaskConnection?: () => void;
};
const WalletContext = createContext<TWalletContext>({
  walletAddress: null,
  nfts: null,
});

type Props = {
  children: ReactNode;
};
export const WalletProvider: FC<Props> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [nfts, setNfts] = useState<Nft[] | null>(null);

  const getNfts = async (address: string) => {
    if (typeof window !== "undefined") {
      if (address) {
        const response: { data: { nfts: Nft[] } } = await fetch(
          `${window.location.origin}/api/load-nfts?address=${address}`
        ).then((res) => res.json());
        setNfts(response.data.nfts);
      }
    }
  };

  const handleMetamaskConnection = async () => {
    if (typeof window !== "undefined") {
      if ((window as any).ethereum) {
        try {
          const data = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });

          console.log("Connected to MetaMask:", data[0]);
          setWalletAddress(data[0]);
          await getNfts(data[0]);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        alert("Please install Metamask");
      }
    }
  };

  return (
    <WalletContext.Provider
      value={{ walletAddress, nfts, handleMetamaskConnection }}
    >
      {children}
    </WalletContext.Provider>
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
