import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import Image from "next/image";

function DetailItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="w-full flex flex-row items-end justify-between pb-4 border-b-[1px] border-[#A0A0A0]">
      <span className="text-black font-medium tracking-tighter text-xl lg:text-3xl">
        {title}
      </span>
      <span className="text-[#A0A0A0] font-medium tracking-tighter text-xl lg:text-3xl">
        {value}
      </span>
    </div>
  );
}

export default function MintDrawer() {
  const { title, height, price, material, weight, isOpenMint, setOpenMint } =
    useMintItemDrawer();

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

      tl.to(bg, { opacity: 1 });
      tl.to(drawerRight, { opacity: 1 }, 0);
    } else {
      html?.classList.remove("locked");
      tl.to(drawerRight, { opacity: 0 });
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
  }, [isOpenMint]);

  return (
    <div
      style={{
        pointerEvents: isOpenMint ? "all" : "none",
      }}
      className="fixed left-0 top-0 z-[1000] w-full h-full mint-drawer-wrapper-popup"
    >
      <div className="mint-drawer-popup-right absolute z-10 h-full max-h-[500px] w-full max-w-[800px] mx-auto left-0 right-0 top-0 bottom-0 my-auto p-6 lg:p-8">
        <div className="relative mint-drawer-popup-content w-full h-full bg-[#0F0F0F] rounded-[4rem] flex flex-col justify-between items-center p-6 lg:p-6">
          {/* <button
            onClick={() => setOpenMint(false)}
            className="absolute right-6 top-6 w-10 h-10 bg-[#1F1F1F]/70 rounded-full z-10 flex items-center justify-center text-white"
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
          </button> */}
          <Image
            src="/favicon.ico"
            width={55}
            height={55}
            alt="Jimbo"
            className="w-[55px] lg:w-[55px]"
          />

          <div className="w-full grid grid-cols-2 grid-rows-2 gap-9">
            <div className="flex flex-col gap-[2px] items-center">
              <span className="block text-white text-2xl lg:text-2xl font-medium tracking-tighter">
                {title}
              </span>
              <span className="block text-white opacity-[.7] text-lg lg:text-lg font-normal tracking-tighter text-center">
                {height} {height === 1 ? "Meter" : "Meters"} Height
              </span>
            </div>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="block text-white text-2xl lg:text-2xl font-medium tracking-tighter">
                {title}
              </span>
              <span className="block text-white opacity-[.7] text-lg lg:text-lg font-normal tracking-tighter text-center">
                {material} Material
              </span>
            </div>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="block text-white text-2xl lg:text-2xl font-medium tracking-tighter">
                {title}
              </span>
              <span className="block text-white opacity-[.7] text-lg lg:text-lg font-normal tracking-tighter text-center">
                {weight} {weight === 1 ? "Kilogram" : "Kilograms"} Weight
              </span>
            </div>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="block text-white text-2xl lg:text-2xl font-medium tracking-tighter">
                {title}
              </span>
              <span className="block text-white opacity-[.7] text-lg lg:text-lg font-normal tracking-tighter text-center">
                {price} ETH Price
              </span>
            </div>
          </div>

          <button
            onClick={() => setOpenMint(false)}
            className="w-full lg:w-fit group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-bold text-base lg:text-xl tracking-tighter bg-[#ff3600] rounded-full lg:px-10 py-2"
          >
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
