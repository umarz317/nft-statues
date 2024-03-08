import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";

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

export default function MintItemDrawer() {
  const { title, height, price, material, weight, isOpen, setOpen } =
    useMintItemDrawer();

  useEffect(() => {
    const html = document.querySelector("html");
    const drawer = document.querySelector(`.mint-drawer-wrapper`);
    const bg = document.querySelector(`.mint-drawer-bg`);
    const drawerRight = document.querySelector(
      `.mint-drawer-right`
    ) as HTMLElement;

    const tl = gsap.timeline();

    if (isOpen) {
      html?.classList.add("overflow-hidden");

      tl.to(bg, { opacity: 1 });
      tl.to(drawerRight, { x: "0%" }, 0);
    } else {
      html?.classList.remove("overflow-hidden");
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
  }, [isOpen]);

  return (
    <div
      style={{
        pointerEvents: isOpen ? "all" : "none",
      }}
      className="fixed left-0 top-0 z-[1000] w-full h-full mint-drawer-wrapper"
    >
      <div className="mint-drawer-right translate-x-[100%] absolute z-10 h-full w-full lg:w-[40%] right-0 top-0 p-6 lg:p-8">
        <div className="relative mint-drawer-content w-full h-full bg-white rounded-3xl flex flex-col justify-between p-6 lg:p-16">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 w-10 h-10 bg-[#1F1F1F]/10 rounded-full z-10 flex items-center justify-center text-black"
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
          <span className="mt-16 block text-black text-6xl lg:text-7xl font-medium tracking-tighter">
            {title}
          </span>
          <div className="flex flex-col details gap-4">
            <DetailItem
              title="Height"
              value={`${height} ${height === 1 ? "Meter" : "Meters"}`}
            />
            {/* <DetailItem key="Price" value={`${price} ETH`} /> */}
            <DetailItem title="Material" value={material} />
            <DetailItem
              title="Weight"
              value={`${weight} ${weight === 1 ? "Kilogram" : "Kilograms"}`}
            />
          </div>
          <div>
            <span className="block text-black font-semibold tracking-tighter text-2xl lg:text-3xl">
              Shipping
            </span>
            <p className="text-[#A0A0A0] mt-4 font-medium tracking-tighter text-xl lg:text-2xl">
              All physical statues will be shipped as soon as completed. Once
              you forge your statue you will get an email that will confirm the
              estimated delivery.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className="absolute  inset-0 bg-black/30 backdrop-blur-2xl opacity-0 mint-drawer-bg z-0"
      />
    </div>
  );
}
