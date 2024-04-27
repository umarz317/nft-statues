"use client";
import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import { urlFor } from "@/lib/sanity/sanityClient";
import { mint, formatErrorMessages } from "@/lib/mint";
import {
  useAccount,
  usePublicClient,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { APE_CONTRACT, BASC_CONTRACT, BLAB_CONTRACT } from "@/lib/constants";
import { formatEther, parseEther } from "ethers";
import { Switch } from "@headlessui/react";
import { erc20Abi } from "viem";
import toast from "react-hot-toast";

export default function MintDrawer() {
  const {
    title,
    height,
    price,
    material,
    weight,
    setTitle,
    setHeight,
    setPrice,
    setMaterial,
    setWeight,
    loading,
    setLoading,
    isOpenMint,
    setOpenMint,
    setOpenMintForm,
    statuesValue,
    currentSelectedStatue,
    setCurrentSelectedStatue,
    isOpenSelectNFT,
    setOpenSelectNFT,
    fromBuyNow,
    isApe,
    setIsApe,
  } = useMintItemDrawer();
  const lenis = useLenis(() => {});
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const client = usePublicClient();

  const { data: Price } = useReadContract({
    address: !fromBuyNow
      ? `0x${BASC_CONTRACT.address}`
      : `0x${BLAB_CONTRACT.address}`,
    abi: BASC_CONTRACT.abi,
    functionName: isApe ? "pricesAPE" : "pricesETH",
    args: [BigInt(3 - currentSelectedStatue)],
  });

  const { data: allowance, refetch } = useReadContract({
    address: `0x${APE_CONTRACT}`,
    abi: erc20Abi,
    functionName: "allowance",
    args: [
      `0x${
        !fromBuyNow ? `${BASC_CONTRACT.address}` : `${BLAB_CONTRACT.address}`
      }`,
      address ? address : `0x0`,
    ],
  });

  async function approve() {
    toast("Approving...", { icon: "⚠️", duration: 2000 });
    setLoading(true);
    try {
      const tx = await writeContractAsync({
        address: `0x${APE_CONTRACT}`,
        abi: erc20Abi,
        functionName: "approve",
        args: [
          `0x${
            !fromBuyNow
              ? `${BASC_CONTRACT.address}`
              : `${BLAB_CONTRACT.address}`
          }`,
          parseEther(Price ? Price.toString() : "0"),
        ],
      });
      var res = client?.waitForTransactionReceipt({ hash: tx });
      if ((await res)?.status === "success") {
        toast.success("Approval Successful!");
        setOpenMint(false);
        setOpenSelectNFT(true);
      } else {
        toast.error("Approval Failed!");
      }
      refetch();
    } catch (e: any) {
      console.log(e);
      toast.error("" + formatErrorMessages(e.message));
    }
    setLoading(false);
  }

  async function mintNFT() {
    toast("Minting...", { icon: "⚠️", duration: 2000 });
    console.log("minting...", currentSelectedStatue);
    if (currentSelectedStatue === -1) {
      toast.error("Please select a statue");
      return;
    }
    setLoading(true);
    try {
      const res = await mint(
        client,
        writeContractAsync,
        (3 - currentSelectedStatue).toString(),
        Price ? Price.toString() : "",
        isApe
      );
      if (res === "success") {
        toast.success("Minting successful");
        setOpenMint(false);
        setOpenSelectNFT(true);
      } else {
        toast.error("Minting failed!");
      }
    } catch (e: any) {
      console.log(e);
      toast.error("" + formatErrorMessages(e.message));
    }
    setLoading(false);
  }

  useEffect(() => {
    const html = document.querySelector("html");
    const drawer = document.querySelector(`.mint-drawer-wrapper-popup`);
    const bg = document.querySelector(`.mint-drawer-popup-bg`);
    const drawerRight = document.querySelector(
      `.mint-drawer-popup-right`
    ) as HTMLElement;

    const tl = gsap.timeline();

    if (isOpenMint) {
      html?.classList.add("locked");
      lenis?.stop();
      tl.to(bg, { opacity: 1 });
      tl.to(drawerRight, { x: "0%" }, 0);
    } else {
      html?.classList.remove("locked");
      lenis?.start();
      tl.to(drawerRight, { x: "100%" });
      tl.to(
        bg,
        {
          opacity: 0,
        },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, [isOpenMint, lenis]);

  return (
    <div
      style={{
        pointerEvents: isOpenMint ? "all" : "none",
      }}
      className="fixed left-0 top-0 z-[1000] w-full h-full mint-drawer-wrapper-popup"
    >
      <div className="mint-drawer-popup-right absolute z-10 h-full max-h-[600px] sm:max-h-[718px] w-full max-w-[589px] right-0 top-0 bottom-0 my-auto p-6 sm:p-8">
        <div className="relative mint-drawer-popup-content rounded-3xl w-full h-full bg-[#0B0B0B] bg-center bg-no-repeat bg-contain flex flex-col justify-center items-center p-2 sm:p-6">
          <div className="angles z-10">
            <svg
              width="12"
              height="12"
              className="absolute -top-2 -left-2 z-10"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.507099"
                y1="2.21659e-08"
                x2="0.507099"
                y2="7.60648"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
              <line
                x1="7.60938"
                y1="0.507099"
                x2="0.00289154"
                y2="0.507099"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
            </svg>
            <svg
              width="12"
              height="12"
              className="absolute -bottom-2 -left-2 -rotate-90"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.507099"
                y1="2.21659e-08"
                x2="0.507099"
                y2="7.60648"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
              <line
                x1="7.60938"
                y1="0.507099"
                x2="0.00289154"
                y2="0.507099"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
            </svg>
            <svg
              width="12"
              height="12"
              className="absolute -bottom-2 -right-2 scale-[-1]"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.507099"
                y1="2.21659e-08"
                x2="0.507099"
                y2="7.60648"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
              <line
                x1="7.60938"
                y1="0.507099"
                x2="0.00289154"
                y2="0.507099"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
            </svg>
            <svg
              width="12"
              height="12"
              className="absolute -top-2 -right-2 rotate-90"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.507099"
                y1="2.21659e-08"
                x2="0.507099"
                y2="7.60648"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
              <line
                x1="7.60938"
                y1="0.507099"
                x2="0.00289154"
                y2="0.507099"
                stroke="#FF3600"
                strokeWidth="1.0142"
              />
            </svg>
          </div>
          <button
            onClick={() => setOpenMint(false)}
            className="absolute right-2 top-2 w-9 sm:w-10 h-9 sm:h-10 bg-[#191919] rounded-full z-10 flex items-center justify-center text-[#717171] hover:scale-105 transition-transform duration-300 ease-out"
          >
            <svg
              width="30%"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.76478 0L10.5 8.73522L19.2352 0L21 1.76478L12.2648 10.5L21 19.2352L19.2352 21L10.5 12.2648L1.76478 21L0 19.2352L8.73522 10.5L0 1.76478L1.76478 0Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div className="w-full grid grid-cols-2 grid-rows-2 gap-6 px-6">
            {statuesValue.map((statue, index) => (
              <button
                key={statue._id}
                onClick={() => {
                  setTitle(statue.title);
                  setHeight(statue.height);
                  setPrice(Number(Price) || 0);
                  setMaterial(statue.material);
                  setWeight(statue.weight);
                  setCurrentSelectedStatue(index);
                }}
                className={`flex flex-col justify-center items-center rounded-[27px] overflow-hidden ${
                  statue.title === title ? "opacity-100" : "opacity-20"
                } duration-300`}
              >
                <Image
                  src={urlFor(statue.image).url()}
                  width={186}
                  height={160}
                  alt={statue.title}
                  className="w-[150px] sm:w-[186px] h-[120px] sm:h-[160px]"
                />
              </button>
            ))}
          </div>

          <div className="w-full flex items-center justify-center px-6 mt-[30px] mb-[20px]">
            {/* <button className="md:w-[52px] w-[30px] md:h-[52px] h-[30px] bg-[url(/static/images/mint-popup-arrow.png)] bg-center bg-no-repeat bg-cover hover:scale-105 transition-transform duration-300 ease-out"></button> */}
            <div className="flex flex-col items-center justify-center gap-2">
              {!title && !Price ? (
                <>
                  <span className="block text-white text-2xl lg:text-4xl font-medium tracking-tighter">
                    Please select statue
                  </span>
                  <span className="block invisible text-white opacity-[.4] text-lg lg:text-xl font-normal tracking-tighter text-center">
                    {formatEther(Price ? Price : 0)} {isApe ? "APE" : "ETH"}{" "}
                    Price
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-white text-2xl lg:text-4xl font-medium tracking-tighter">
                    {title}
                  </span>
                  <span className="block text-white opacity-[.4] text-lg lg:text-xl font-normal tracking-tighter text-center">
                    {formatEther(Price ? Price : 0)} {isApe ? "APE" : "ETH"}
                  </span>
                </>
              )}
            </div>
            {/* <button className="md:w-[52px] w-[30px] md:h-[52px] h-[30px] bg-[url(/static/images/mint-popup-arrow.png)] bg-center bg-no-repeat bg-cover transform rotate-180 hover:scale-105 transition-transform duration-300 ease-out"></button> */}
          </div>
          <div className="py-16 absolute lg:left-10 bottom-20 left-5 font-medium tracking-tighter lg:bottom-0 text-center">
            <Switch
              checked={isApe}
              onChange={setIsApe}
              className={`${isApe ? "bg-[#ff3600]" : "bg-red-400"}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span className="sr-only white">Use APE</span>
              <span
                aria-hidden="true"
                className={`${
                  isApe
                    ? "translate-x-9 bg-gray-100"
                    : "translate-x-0 bg-gray-900"
                }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <h6 className="text-white mt-2 text-sm">Use APE</h6>
          </div>
          <button
            onClick={() => {
              // setLoading(true);
              // try {
              //   await new Promise<void>((resolve) => {
              //     setTimeout(() => {
              //       console.log("Operation completed");
              //       resolve();
              //     }, 5000);
              //   }).then(() => {
              //     setOpenMint(false);
              //     setOpenSelectNFT(true);
              //   });
              // } catch (error) {
              //   console.log("Error:", error);
              // }
              // setLoading(false);
              if (isApe && (allowance ? allowance : 0) < (Price ? Price : 0)) {
                approve();
              } else mintNFT();
            }}
            disabled={loading}
            className="w-[80%] mt-6 lg:w-fit group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-medium text-base lg:text-xl tracking-tighter bg-[#ff3600] rounded-full lg:px-10 py-2 disabled:bg-opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                <span>
                  {isApe
                    ? (allowance ? allowance : 0) >= (Price ? Price : 0)
                      ? fromBuyNow
                        ? "Buy Now"
                        : "Mint"
                      : "Approve"
                    : fromBuyNow
                    ? "Buy Now"
                    : "Mint"}
                </span>
                <span className="block w-3 group-hover:translate-x-1 transition-transform duration-300 ease-out">
                  <svg
                    width="100%"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.81607 0.945313L13.0742 6.20345L7.81607 11.4616M0.30443 6.20345L12.6986 6.20346"
                      stroke="black"
                      strokeWidth="1.50233"
                    />
                  </svg>
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        onClick={() => setOpenMint(false)}
        className="absolute inset-0 bg-black/30 backdrop-blur-2xl opacity-0 mint-drawer-popup-bg z-0"
      />
    </div>
  );
}
