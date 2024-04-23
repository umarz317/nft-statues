import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useForm } from "react-hook-form";
import {
  usePublicClient,
  useWaitForTransactionReceipt,
  useWalletClient,
  useWriteContract,
} from "wagmi";
import { BASC_CONTRACT } from "@/lib/constants";
import { parseEther } from "ethers";
import { mint } from "@/lib/mint";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanityClient";

const InputsData = [
  { name: "name", label: "Name", type: "text" },
  { name: "shipping-address", label: "Shipping Address", type: "text" },
  { name: "contact-phone-number", label: "Contact Phone Number", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "twitter", label: "Twitter/X", type: "text" },
];

export default function MintFormDrawer() {
  const { statuesValue, selectedNFT, isOpenMintForm, setOpenMintForm } =
    useMintItemDrawer();
  console.log("statuesValue:", statuesValue[0]);
  const lenis = useLenis(() => {});

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const html = document.querySelector("html");
    const drawer = document.querySelector(`.mint-form-drawer-wrapper-popup`);
    const bg = document.querySelector(`.mint-form-drawer-popup-bg`);
    const drawerRight = document.querySelector(
      `.mint-form-drawer-popup-right`
    ) as HTMLElement;
    const nftImage = document.querySelector(
      `.mint-form-drawer-popup-image`
    ) as HTMLElement;

    const tl = gsap.timeline();

    if (isOpenMintForm) {
      html?.classList.add("locked");
      lenis?.stop();
      tl.to(bg, { opacity: 1 });
      tl.to(drawerRight, { opacity: 1, scaleX: 1 }, 0);
      tl.to(nftImage, { opacity: 1, rotate: "0deg", x: 0 }, 0);
    } else {
      html?.classList.remove("locked");
      lenis?.start();
      tl.to(drawerRight, { opacity: 0, scaleX: 0 }).then(() =>
        tl.to(nftImage, { opacity: 0, rotate: "180deg", x: "200%" })
      );
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
  }, [isOpenMintForm, lenis]);

  const onSubmit = async (data: any) => {
    setOpenMintForm(false);
    reset();
  };

  return (
    <div
      style={{
        pointerEvents: isOpenMintForm ? "all" : "none",
      }}
      className="fixed left-0 top-0 z-[1000] w-full h-full mint-form-drawer-wrapper-popup"
    >
      <div className="mint-form-drawer-popup-right absolute z-10 h-full max-h-[776.9px] w-full max-w-[1640.1px] top-0 bottom-0 right-0 left-0 my-auto mx-auto p-6 sm:p-8">
        <div className="relative mint-form-drawer-popup-content rounded-3xl w-full h-full bg-[#0B0B0B] bg-center bg-no-repeat bg-contain flex flex-col justify-center items-center p-2 xl:p-6">
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
          {/* <button
            onClick={() => setOpenMintForm(false)}
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

          <div
            data-lenis-prevent
            className="w-full h-full flex lg:flex-row flex-col-reverse gap-12 xl:gap-24 items-center justify-between pr-4 md:pr-11 xl:pr-24 pl-4 md:pl-11 xl:pl-[88px] py-10 lg:py-0 overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-3 gap-10 px-6"
            >
              {InputsData.map((input) => (
                <div key={input.name}>
                  <label
                    htmlFor={input.name}
                    className="block mb-5 text-white/40 text-xl"
                  >
                    {input.label}
                  </label>
                  <input
                    {...register(input.name)}
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    className="w-full text-xl border border-gray-300 bg-transparent text-white rounded-full px-5 py-6"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-5 text-white/40 text-xl">
                  Forge
                </label>
                <button
                  type="submit"
                  className="w-full h-20 group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center text-black font-medium text-base lg:text-xl tracking-tighter rounded-full overflow-hidden [box-shadow:_0_0_99px_0_rgba(255,_54,_0,_0.4)]"
                >
                  <div className="w-full h-full flex items-center justify-center bg-[#ff3600]">
                    <span className="text-[26px] uppercase text-[#0e0e0e] font-black">
                      Forge
                    </span>
                  </div>
                  <div className="w-[91.5px] h-full flex items-center justify-center shrink-0 backdrop-blur-lg bg-[#1E1E1E]/50 pr-[25px]">
                    <span className="block w-3 group-hover:translate-x-1 transition-transform duration-300 ease-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27.001"
                        height="19.071"
                        viewBox="0 0 27.001 19.071"
                      >
                        <path
                          data-name="Union 1"
                          d="M-8133.95-1187.687a2 2 0 0 1 0-2.829l4.121-4.119H-8148a2 2 0 0 1-2-2 2 2 0 0 1 2-2h18.171l-4.122-4.121a2 2 0 0 1 0-2.829 2 2 0 0 1 2.829 0l7.071 7.071a2.007 2.007 0 0 1 .213.252 2 2 0 0 1 .838 1.628 2 2 0 0 1-.841 1.63 2.013 2.013 0 0 1-.21.248l-7.071 7.071a1.991 1.991 0 0 1-1.414.586 2 2 0 0 1-1.414-.588z"
                          transform="translate(8150 1206.172)"
                          style={{ fill: "#ff3600" }}
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </form>
            <div className="mint-form-drawer-popup-image w-60 lg:w-[488.9px] md:w-80 h-60 lg:h-[596px] md:h-80 rounded-[40px] bg-black shrink-0 relative">
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
              {selectedNFT?.image ? (
                <Image
                  src={urlFor(selectedNFT.image).url()}
                  width={437.3}
                  height={358.6}
                  alt={selectedNFT?.title || ""}
                  className="w-full h-full rounded-[40px]"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenMintForm(false)}
        className="absolute inset-0 bg-black/30 backdrop-blur-2xl opacity-0 mint-form-drawer-popup-bg z-0"
      />
    </div>
  );
}
