import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { useEffect } from "react";

function DetailItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="w-full flex flex-row items-end justify-between pb-4 border-b-[1px] border-[#A0A0A0]">
      <span className="text-black font-medium tracking-tighter text-3xl">
        {title}
      </span>
      <span className="text-[#A0A0A0] font-medium tracking-tighter text-3xl">
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
      <div className="mint-drawer-right translate-x-[100%] absolute z-10 h-full w-[40%] right-0 top-0 p-8">
        <div className="mint-drawer-content w-full h-full bg-white rounded-3xl flex flex-col justify-between p-16">
          <span className="mt-16 block text-black text-7xl font-medium tracking-tighter">
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
            <span className="block text-black font-semibold tracking-tighter text-4xl">
              Shipping
            </span>
            <p className="text-[#A0A0A0] mt-4 font-medium tracking-tighter text-3xl">
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
