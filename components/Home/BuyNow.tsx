import Image from "next/image";
import SectionHeader from "./SectionHeader";
// import { mint } from "@/lib/mint";

export default function BuyNowSection() {
  return (
    <section className="buy-section pt-12 w-screen relative pb-12">
      <div id="buy" className="absolute top-0 -mt-44 h-32" />
      <SectionHeader
        title={<>BUY NOW</>}
        description={
          <>
            You can buy a statue outside the collection. <br />
            These statues do not come with NFTs and will start <br />
            manufacturing as soon as the order is compelted.
          </>
        }
      />
      <div className="mt-10 flex flex-col items-center w-full px-4 lg:px-24 gap-12 lg:gap-24">
        <Image
          src="/static/images/bascStone.png"
          width={379}
          height={474}
          alt=""
          className="max-w-[50%]"
        />
        <button
          style={{
            boxShadow: "0px 0px 20px 5px rgba(255,54,0,0.42)",
          }}
          className="uppercase hover:scale-105 transition-transform duration-300 ease-out  rounded-full text-black tracking-tighter font-semibold text-lg lg:text-2xl px-10 lg:px-16 py-3 lg:py-4 bg-[#FF3600]"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
}
