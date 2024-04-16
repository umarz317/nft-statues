import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";

export default function MintDrawer() {
  const { title, height, price, material, weight, isOpenMint, setOpenMint } =
    useMintItemDrawer();
  const lenis = useLenis(() => {});

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
            <div className="flex flex-col justify-center items-center rounded-[27px] overflow-hidden">
              <Image
                src="/static/images/mint-popup-image.png"
                width={186}
                height={183}
                alt="image"
                className="w-[150px] sm:w-[186px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center rounded-[27px] overflow-hidden">
              <Image
                src="/static/images/mint-popup-image.png"
                width={186}
                height={183}
                alt="image"
                className="w-[150px] sm:w-[186px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center rounded-[27px] overflow-hidden">
              <Image
                src="/static/images/mint-popup-image.png"
                width={186}
                height={183}
                alt="image"
                className="w-[150px] sm:w-[186px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center rounded-[27px] overflow-hidden">
              <Image
                src="/static/images/mint-popup-image.png"
                width={186}
                height={183}
                alt="image"
                className="w-[150px] sm:w-[186px]"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center px-6 mt-[44px] mb-[26px]">
            {/* <button className="md:w-[52px] w-[30px] md:h-[52px] h-[30px] bg-[url(/static/images/mint-popup-arrow.png)] bg-center bg-no-repeat bg-cover hover:scale-105 transition-transform duration-300 ease-out"></button> */}
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="block text-white text-2xl lg:text-4xl font-medium tracking-tighter">
                {title}
              </span>
              <span className="block text-white opacity-[.4] text-lg lg:text-xl font-normal tracking-tighter text-center">
                {price} ETH Price
              </span>
            </div>
            {/* <button className="md:w-[52px] w-[30px] md:h-[52px] h-[30px] bg-[url(/static/images/mint-popup-arrow.png)] bg-center bg-no-repeat bg-cover transform rotate-180 hover:scale-105 transition-transform duration-300 ease-out"></button> */}
          </div>

          <button
            onClick={() => setOpenMint(false)}
            className="w-[80%] mt-6 lg:w-fit group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-medium text-base lg:text-xl tracking-tighter bg-[#ff3600] rounded-full lg:px-10 py-2"
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
      {/* old popup */}
      {/* <div className="mint-drawer-popup-right absolute z-10 h-full max-h-[500px] w-full max-w-[800px] mx-auto left-0 right-0 top-0 bottom-0 my-auto p-6 lg:p-8">
        <div className="relative mint-drawer-popup-content w-full h-full bg-[#0F0F0F] rounded-[4rem] flex flex-col justify-between items-center p-6 lg:p-6">
          <button
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
          </button>
          <Image
            src="/static/images/white-jimbo.svg"
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
      </div> */}
      <div
        onClick={() => setOpenMint(false)}
        className="absolute inset-0 bg-black/30 backdrop-blur-2xl opacity-0 mint-drawer-popup-bg z-0"
      />
    </div>
  );
}
