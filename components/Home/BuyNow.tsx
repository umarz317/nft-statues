import Image from "next/image";
import SectionHeader from "./SectionHeader";

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
      <div className="mt-10 flex flex-col items-center w-full px-4 lg:px-24 gap-12">
        <Image
          src="/static/images/bascStone.png"
          width={379}
          height={474}
          alt=""
          className="max-w-[50%]"
        />
      </div>
    </section>
  );
}
