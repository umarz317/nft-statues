import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import { urlFor } from "@/lib/sanity/sanityClient";

export default function SelectNftDrawer() {
  const {
    setOpenMintForm,
    statuesValue,
    currentSelectedStatue,
    setCurrentSelectedStatue,
    isOpenSelectNFT,
    setOpenSelectNFT,
    selectedNFT,
    setSelectedNFT,
  } = useMintItemDrawer();
  const lenis = useLenis(() => {});

  useEffect(() => {
    const html = document.querySelector("html");
    const drawer = document.querySelector(`.select-nft-drawer-wrapper-popup`);
    const bg = document.querySelector(`.select-nft-drawer-popup-bg`);
    const drawerRight = document.querySelector(
      `.select-nft-drawer-popup-right`
    ) as HTMLElement;

    const tl = gsap.timeline();

    if (isOpenSelectNFT) {
      html?.classList.add("locked");
      lenis?.stop();
      tl.to(bg, { opacity: 1 });
      tl.to(drawerRight, { opacity: 1 }, 0);
    } else {
      html?.classList.remove("locked");
      lenis?.start();
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
  }, [isOpenSelectNFT, lenis]);

  return (
    <div
      style={{
        pointerEvents: isOpenSelectNFT ? "all" : "none",
      }}
      className="fixed left-0 top-0 z-[1000] w-full h-full select-nft-drawer-wrapper-popup"
    >
      <div className="select-nft-drawer-popup-right absolute z-10 h-full w-full right-0 top-0 p-6 sm:p-8">
        <div className="relative select-nft-drawer-popup-content w-full h-full flex flex-col items-center p-2 sm:p-6">
          {/* <div className="angles z-10">
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
          </div> */}
          {/* <button
            onClick={() => setOpenSelectNFT(false)}
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
          </button> */}

          <div className="w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-12 h-screen overflow-y-scroll px-10 xl:px-48">
            {statuesValue.map((statue) => (
              <button
                key={statue._id}
                onClick={() => {
                  setSelectedNFT(statue);
                  setOpenSelectNFT(false);
                  setOpenMintForm(true);
                }}
                className={`flex flex-col justify-between items-center rounded-[35px] overflow-hidden max-w-[437.3px] w-full h-[525px] ${
                  selectedNFT?._id === statue._id ? "opacity-100" : "opacity-65"
                } duration-300`}
              >
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={urlFor(statue.image).url()}
                    width={437.3}
                    height={358.6}
                    alt={statue.title}
                    className="w-full h-[358.6px]"
                  />
                </div>
                <div className="w-full h-[166.4px] bg-[#191919] shrink-0 flex items-center justify-between">
                  <div className="flex flex-col gap-2 pl-4 sm:pl-10">
                    <span className="block text-white text-2xl lg:text-4xl font-medium tracking-tighter text-left">
                      {statue.title}
                    </span>
                    <span className="block text-white opacity-[.4] text-lg lg:text-xl font-normal tracking-tighter text-left">
                      {statue.price} ETH
                    </span>
                  </div>
                  <div className="pr-4 sm:pr-[24px]">
                    <button
                      onClick={() => {
                        setSelectedNFT(statue);
                        setOpenSelectNFT(false);
                        setOpenMintForm(true);
                      }}
                      className={`w-[100px] sm:w-[151.8px] mt-6 group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center text-black text-base lg:text-xl tracking-tighter bg-[#ff3600] rounded-full py-2 font-black shrink-0  ${
                        selectedNFT?._id === statue._id
                          ? "[box-shadow:_0_0_50px_0_rgba(255,_54,_0,_0.52)]"
                          : "[box-shadow:transparent]"
                      }`}
                    >
                      {selectedNFT?._id === statue._id ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        // onClick={() => setOpenSelectNFT(false)}
        className="absolute inset-0 bg-black/30 backdrop-blur-2xl opacity-0 select-nft-drawer-popup-bg z-0"
      />
    </div>
  );
}
