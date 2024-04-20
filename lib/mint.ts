import { ethers } from "ethers";
import ABI from "@/abi/mint.json";

const MintAddress = "0x4c6a993441D59673E5F8a822d7117E4be38605a1";

export async function connectWallet() {
  if ((window as any).ethereum) {
    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      return { address, signer };
    } catch (ex) {
      console.log("Error connecting wallet", ex);
    }
  } else {
    alert("Please install MetaMask!");
  }
}
export async function mint() {
  const { address, signer } = await connectWallet();
  const mintContract = new ethers.Contract(MintAddress, ABI, signer);
}
