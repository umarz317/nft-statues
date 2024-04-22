import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import { urlFor } from "@/lib/sanity/sanityClient";
import { mint, formatErrorMessages } from "@/lib/mint";
import { usePublicClient, useWriteContract } from "wagmi";
import { NFTPrices } from "@/lib/constants";

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
  } = useMintItemDrawer();
  const lenis = useLenis(() => {});

  //mint functionality

  const { writeContractAsync } = useWriteContract();
  const client = usePublicClient();

  async function mintNFT() {
    console.log("minting...", currentSelectedStatue);
    if (currentSelectedStatue === -1) {
      alert("Please select a statue");
      return;
    }
    try {
      setLoading(true);
      const res = await mint(
        client,
        writeContractAsync,
        (3 - currentSelectedStatue).toString(),
        NFTPrices[currentSelectedStatue.toString()],
        false
      );
      if (res === "success") {
        alert("Minting successful");
        setLoading(false);
      } else {
        alert("Minting failed");
        setLoading(false);
      }
    } catch (e: any) {
      console.log(e);
      alert("Minting failed: " + formatErrorMessages(e.message));
      setLoading(false);
    }
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
                  setPrice(statue.price);
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
              {!title && !price ? (
                <>
                  <span className="block text-white text-2xl lg:text-4xl font-medium tracking-tighter">
                    Please select statue
                  </span>
                  <span className="block invisible text-white opacity-[.4] text-lg lg:text-xl font-normal tracking-tighter text-center">
                    {price} ETH Price
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-white text-2xl lg:text-4xl font-medium tracking-tighter">
                    {title}
                  </span>
                  <span className="block text-white opacity-[.4] text-lg lg:text-xl font-normal tracking-tighter text-center">
                    {price} ETH Price
                  </span>
                </>
              )}
            </div>
            {/* <button className="md:w-[52px] w-[30px] md:h-[52px] h-[30px] bg-[url(/static/images/mint-popup-arrow.png)] bg-center bg-no-repeat bg-cover transform rotate-180 hover:scale-105 transition-transform duration-300 ease-out"></button> */}
          </div>

          <button
            onClick={() => {
              setOpenMint(false);
              setOpenSelectNFT(true);
              // mintNFT()
            }}
            className="w-[80%] mt-6 lg:w-fit group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-medium text-base lg:text-xl tracking-tighter bg-[#ff3600] rounded-full lg:px-10 py-2"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <span>Mint</span>
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
