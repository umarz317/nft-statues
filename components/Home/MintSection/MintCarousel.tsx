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
  index,
  imageSRC,
  title,
  height,
  price,
  material,
  weight,
}: {
  index:number
  imageSRC: string;
  title: string;
  height: number;
  price: number;
  material: string;
  weight: number;
}) {
  const titleWithoutSpaces = title.replace(/\s/g, "");
  const {
    setTitle,
    setHeight,
    setPrice,
    setMaterial,
    setWeight,
    setOpen,
    setOpenMint,
    currentSelectedStatue,
    setCurrentSelectedStatue
  } = useMintItemDrawer();
  return (
    <>
      <div
        id={titleWithoutSpaces}
        className="mint-item relative w-full lg:aspect-square h-auto bg-transparent p-6 lg:p-8 flex flex-col justify-between"
      >
        <div className="order-1 w-full flex flex-col">
          <span className="block text-white text-2xl lg:text-3xl">{title}</span>
          <p className="text-[#A0A0A0] text-xl">{height} Meters Height</p>
        </div>
        <div className="order-4 lg:order-2 w-full flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0 mt-4 lg:mt-0 relative z-10">
          <span className="block text-white font-semibold text-xl">
            {price} ETH
          </span>
          <div className="flex flex-col lg:flex-row items-center gap-3 select-none w-full lg:w-fit">
            <button
              onClick={() => {
                setTitle(title);
                setHeight(height);
                setPrice(price);
                setMaterial(material);
                setWeight(weight);
                setOpenMint(true);
                setCurrentSelectedStatue(index)
              }}
              className="w-full lg:w-fit group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-medium text-base lg:text-lg tracking-tighter bg-white rounded-full lg:px-10 py-2"
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
            <button
              onClick={() => {
                setTitle(title);
                setHeight(height);
                setPrice(price);
                setMaterial(material);
                setWeight(weight);
                setOpen(true);
              }}
              className="w-full lg:w-fit group hover:scale-105 transition-transform duration-300 ease-out flex flex-row items-center justify-center gap-2 text-black font-medium text-base lg:text-lg tracking-tighter bg-[#ff3600] rounded-full lg:px-10 py-2"
            >
              <span>Details</span>
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
        <Image
          src={imageSRC}
          width={1200}
          height={1200}
          // style={{
          //   WebkitMaskImage:
          //     "linear-gradient(to bottom, black 0%, black 10%, transparent 100%)",
          // }}
          className="order-3 mt-6 lg:mt-0 w-full z-0 h-full lg:absolute left-1/2 lg:-translate-x-1/2 bottom-0 object-contain rounded-xl lg:rounded-3xl"
          alt={title + "Statue"}
        />
      </div>
    </>
  );
}

export default function MintCarousel({ statues }: { statues: any[] }) {
  useIsomorphicLayoutEffect(() => {
    let animInTlFirst = gsap.timeline({
      scrollTrigger: {
        trigger: ".mint-carousel-wrapper",
        start: "top 70%",
        // markers: true,
      },
    });

    animInTlFirst.fromTo(
      ".mint-carousel-wrapper .buttons",
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0
    );
    animInTlFirst.fromTo(
      ".mint-carousel-wrapper .swiper-slide",
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, stagger: 0.1 },
      0
    );
  }, []);

  return (
    <div className="mint-carousel-wrapper pl-8 lg:pl-64 mt-16 flex flex-col items-end gap-8">
      <div className="buttons w-fit mr-12 lg:mr-24 flex flex-row items-center gap-2 lg:gap-3">
        <button className="swiper-prev hover:scale-105 transition-transform duration-300 ease-out size-10 lg:size-16 bg-white rounded-lg flex items-center justify-center">
          <span className="block w-4 lg:w-6">
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
        <button className="swiper-next hover:scale-105 transition-transform duration-300 ease-out size-10 lg:size-16 bg-white rounded-lg flex items-center justify-center">
          <span className="block w-4 lg:w-6 scale-[-1]">
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
        spaceBetween={15}
        slidesPerView={1.3}
        slidesOffsetAfter={48}
        grabCursor={true}
        breakpoints={{
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 25,
            centerInsufficientSlides: true,
            slidesOffsetAfter: 96,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
        navigation={{
          nextEl: ".mint-carousel-wrapper .swiper-next",
          prevEl: ".mint-carousel-wrapper .swiper-prev",
        }}
      >
        {statues.map((statue,index) => (
          <SwiperSlide key={statue._id}>
            <MintItem
            index={index}
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
