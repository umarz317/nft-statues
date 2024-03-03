import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanityClient";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { useState } from "react";
import { useMintItemDrawer } from "@/hooks/useMintItemDrawer";

function MintItem({
  imageSRC,
  title,
  height,
  price,
  material,
  weight,
}: {
  imageSRC: string;
  title: string;
  height: number;
  price: number;
  material: string;
  weight: number;
}) {
  const titleWithoutSpaces = title.replace(/\s/g, "");
  const { setTitle, setHeight, setPrice, setMaterial, setWeight, setOpen } =
    useMintItemDrawer();
  return (
    <>
      <div
        id={titleWithoutSpaces}
        className="mint-item relative w-full aspect-square h-auto bg-[#0F0F0F] rounded-3xl p-10 flex flex-col justify-between"
      >
        <div className="w-full flex flex-col">
          <span className="block text-white text-3xl">{title}</span>
          <p className="text-[#A0A0A0] text-xl">{height} Meters Height</p>
        </div>
        <div className="w-full flex flex-row items-center justify-between relative z-10">
          <span className="block text-white font-semibold text-xl">
            {price} ETH
          </span>
          <div className="flex flex-row items-center gap-4 select-none">
            <button className="flex flex-row items-center gap-2 text-black font-semibold text-lg tracking-tighter bg-white rounded-full px-10 py-2">
              <span>Mint</span>
              <span className="block w-3">
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
            <button
              onClick={() => {
                setTitle(title);
                setHeight(height);
                setPrice(price);
                setMaterial(material);
                setWeight(weight);
                setOpen(true);
              }}
              className="flex flex-row items-center gap-2 text-black font-semibold text-lg tracking-tighter bg-[#ff3600] rounded-full px-10 py-2"
            >
              <span>More Details</span>
              <span className="block w-3">
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
        <Image
          src={imageSRC}
          width={600}
          height={600}
          className="w-full z-0 h-[80%] absolute left-1/2 -translate-x-1/2 bottom-0 object-contain rounded-xl"
          alt={title + "Statue"}
        />
      </div>
    </>
  );
}

export default function MintCarousel({ statues }: { statues: any[] }) {
  return (
    <div className="carousel-wrapper pl-64 mt-16 flex flex-col items-end gap-8">
      <div className="buttons w-fit mr-24 flex flex-row items-center gap-3">
        <button className="swiper-prev size-16 bg-white rounded-lg flex items-center justify-center">
          <span className="block w-6">
            <svg
              width="100%"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6063 1.89063L2.23047 11.2664L11.6063 20.6422M25.0003 11.2664L2.90017 11.2664"
                stroke="black"
                strokeWidth="2.6788"
              />
            </svg>
          </span>
        </button>
        <button className="swiper-next size-16 bg-white rounded-lg flex items-center justify-center">
          <span className="block w-6 scale-[-1]">
            <svg
              width="100%"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6063 1.89063L2.23047 11.2664L11.6063 20.6422M25.0003 11.2664L2.90017 11.2664"
                stroke="black"
                strokeWidth="2.6788"
              />
            </svg>
          </span>
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
      >
        {statues.map((statue) => (
          <SwiperSlide key={statue._id}>
            <MintItem
              title={statue.title}
              height={statue.height}
              price={statue.price}
              imageSRC={urlFor(statue.image).url()}
              weight={statue.weight}
              material={statue.material}
            />
          </SwiperSlide>
        ))}
        {statues.map((statue) => (
          <SwiperSlide key={statue._id}>
            <MintItem
              title={statue.title}
              height={statue.height}
              price={statue.price}
              imageSRC={urlFor(statue.image).url()}
              weight={statue.weight}
              material={statue.material}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
