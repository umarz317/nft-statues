import fetch from "cross-fetch";

export const loadOpenSeaCollections = async ({
  walletAddress,
  page = 0,
}: {
  walletAddress: string;
  page?: number;
}) => {
  if (walletAddress) {
    const limit = 20;
    const offset = page * limit;
    const headers = {
      "X-API-KEY": process.env.OPENSEA_API_KEY!,
    };
    try {
      const endpointURL = `https://api.opensea.io/api/v2/chain/ethereum/account/${walletAddress}/nfts`;
      const res = await fetch(endpointURL, { headers });
      const data = await res.json();
      // eslint-disable-next-line no-console
      return data;
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.log(ex);
      return null;
    }
  }
  return null;
};
