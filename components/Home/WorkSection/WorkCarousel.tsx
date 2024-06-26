import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { urlFor } from "@/lib/sanity/sanityClient";

function WorkItem({ imageSRC }: { imageSRC: string }) {
  return (
    <div className="work-item w-full">
      <Image
        src={imageSRC}
        width={600}
        height={600}
        className="w-full object-cover rounded-md lg:rounded-xl"
        alt="work-item"
      />
    </div>
  );
}

export default function WorkCarousel({ works }: { works: any[] }) {
  useIsomorphicLayoutEffect(() => {
    let animInTlFirst = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-carousel-wrapper",
        start: "top 70%",
        end: "bottom 70%",
        // markers: true,
      },
    });

    animInTlFirst.fromTo(
      ".work-carousel-wrapper .buttons",
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0
    );
    animInTlFirst.fromTo(
      ".work-carousel-wrapper .swiper-slide",
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, stagger: 0.1 },
      0
    );

    return () => {
      animInTlFirst.kill();
    };
  }, []);

  const worksTimesFive = [...works, ...works, ...works, ...works, ...works];

  const worksShown = works.length < 4 ? worksTimesFive : works;

  return (
    <div className="work-carousel-wrapper pl-12 lg:pl-64 mt-16 flex flex-col items-end gap-8">
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
        slidesPerView={1.5}
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
          nextEl: ".work-carousel-wrapper .swiper-next",
          prevEl: ".work-carousel-wrapper .swiper-prev",
        }}
      >
        {worksShown.map((work, i) => (
          <SwiperSlide key={i}>
            <WorkItem imageSRC={urlFor(work.image).url()} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
