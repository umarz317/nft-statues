import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { urlFor } from "@/lib/sanity/sanityClient";
import { bebas } from "@/pages/_app";
import Link from "next/link";

function TeamItem({
  title,
  name,
  twitterLink,
  imageSRC,
}: {
  title: string;
  name: string;
  twitterLink: string;
  imageSRC: string;
}) {
  return (
    <div className="team-item relative w-full">
      <div className="absolute z-10 w-full p-8 bottom-0 left-0 flex flex-row items-end justify-between">
        <div className="flex flex-col">
          <span className="text-lg lg:text-2xl font-medium text-[#676767] tracking-tighter">
            {title}
          </span>
          <span
            style={bebas.style}
            className="text-4xl lg:text-7xl font-medium text-white -mb-3"
          >
            {name}
          </span>
        </div>
        <Link
          className="size-16 hover:scale-110 transition-transform duration-200 ease-out bg-[#FFFFFF] rounded-full flex items-center justify-center"
          href={twitterLink}
          target="_blank"
        >
          <span className="w-6 block">
            <svg
              width="100%"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.653726 0.914062L8.29557 11.4906L0.605469 20.0898H2.3362L9.06887 12.5611L14.5087 20.0898H20.3984L12.3266 8.91835L19.4845 0.914062H17.7538L11.5533 7.84787L6.54347 0.914062H0.653726ZM3.1989 2.23368H5.90466L17.8529 18.77H15.1471L3.1989 2.23368Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </Link>
      </div>

      <div className="absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-black/50 to-transparent" />
      <Image
        src={imageSRC}
        width={600}
        height={600}
        className="w-full aspect-square h-auto z-[1] object-cover rounded-md lg:rounded-xl"
        alt="team-item"
      />
    </div>
  );
}

export default function TeamCarousel({ teamMembers }: { teamMembers: any[] }) {
  useIsomorphicLayoutEffect(() => {
    let animInTlFirst = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-carousel-wrapper",
        start: "top 70%",
        end: "bottom 70%",
        // markers: true,
      },
    });

    animInTlFirst.fromTo(
      ".team-carousel-wrapper .buttons",
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0
    );
    animInTlFirst.fromTo(
      ".team-carousel-wrapper .swiper-slide",
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, stagger: 0.1 },
      0
    );

    return () => {
      animInTlFirst.kill();
    };
  }, []);

  return (
    <div className="team-carousel-wrapper pl-12 lg:pl-64 mt-16 flex flex-col items-end gap-8">
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
          nextEl: ".team-carousel-wrapper .swiper-next",
          prevEl: ".team-carousel-wrapper .swiper-prev",
        }}
      >
        {teamMembers.map((member, i) => (
          <SwiperSlide key={i}>
            <TeamItem
              title={member.title}
              name={member.name}
              twitterLink={member.twitterLink}
              imageSRC={urlFor(member.image).url()}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
