import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useForm } from "react-hook-form";

const InputsData = [
  { name: "name", label: "Name", type: "text" },
  { name: "shipping-address", label: "Shipping Address", type: "text" },
  { name: "contact-phone-number", label: "Contact Phone Number", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "twitter", label: "Twitter/X", type: "text" },
];

export default function MintFormDrawer() {
  const { isOpenMintForm, setOpenMintForm } = useMintItemDrawer();
  const lenis = useLenis(() => {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const html = document.querySelector("html");
    const drawer = document.querySelector(`.mint-form-drawer-wrapper-popup`);
    const bg = document.querySelector(`.mint-form-drawer-popup-bg`);
    const drawerRight = document.querySelector(
      `.mint-form-drawer-popup-right`
    ) as HTMLElement;

    const tl = gsap.timeline();

    if (isOpenMintForm) {
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
  }, [isOpenMintForm, lenis]);

  const onSubmit = (data: any) => {
    console.log("data:", data);
    setOpenMintForm(false);
  };

  return (
    <div
      style={{
        pointerEvents: isOpenMintForm ? "all" : "none",
      }}
      className="fixed left-0 top-0 z-[1000] w-full h-full mint-form-drawer-wrapper-popup"
    >
      <div className="mint-form-drawer-popup-right absolute z-10 h-screen w-screen top-0 left-0 p-6 sm:p-8">
        <div className="relative mint-form-drawer-popup-content rounded-3xl w-full h-full bg-[#0B0B0B] bg-center bg-no-repeat bg-contain flex flex-col justify-center items-center p-2 sm:p-6">
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
          </button>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full grid grid-cols-2 grid-rows-3 gap-6 px-6"
          >
            {InputsData.map((input) => (
              <div key={input.name}>
                <label htmlFor={input.name} className="block mb-1 text-white">
                  {input.label}:
                </label>
                <input
                  {...register(input.name)}
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  className="w-full border border-gray-300 bg-transparent text-white rounded-full px-5 py-2"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 text-white">Forge:</label>
              <button
                type="submit"
                className="w-full group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-medium text-base lg:text-xl tracking-tighter bg-[#ff3600] rounded-full lg:px-10 py-2"
              >
                <span>Forge</span>
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
          </form>
        </div>
      </div>

      <div
        onClick={() => setOpenMintForm(false)}
        className="absolute inset-0 bg-black/30 backdrop-blur-2xl opacity-0 mint-form-drawer-popup-bg z-0"
      />
    </div>
  );
}
