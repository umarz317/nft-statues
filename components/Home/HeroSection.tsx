import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { bebas } from "@/pages/_app";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

export default function HeroSection({}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDownDate = new Date("Apr 24, 2024 14:00:00").getTime();

  function updateDays() {
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  useLayoutEffect(() => {
    updateDays();
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    root.style.setProperty(
      "--service-card-width",
      `${cardRef.current?.offsetWidth}px`
    );
    const card = cardRef.current;
    const hoverTarget = hoverRef.current as HTMLDivElement;

    function handleMouseOver(e: MouseEvent) {
      card!.style.transition = "";
      let x = e.clientX - hoverTarget?.offsetWidth / 2;
      let y = e.clientY - hoverTarget?.offsetHeight / 2;
      let normalizedX = (1 * 15 * x) / hoverTarget?.offsetWidth;
      let normalizedY = (1 * (8 * y)) / hoverTarget?.offsetHeight;
      gsap.to(card, {
        duration: 0.1,
        rotateY: -normalizedX,
        rotateX: normalizedY,
        ease: "power2.inOut",
      });
      // card!.style.transform = `rotateY(${-normalizedX}deg) rotateX(${normalizedY}deg)`;
    }

    const interval = setInterval(() => {
      updateDays();
    }, 1000);

    document.addEventListener("mousemove", (e) => handleMouseOver(e));

    return () => {
      document.removeEventListener("mousemove", (e) => handleMouseOver(e));
      clearInterval(interval);
    };
  }, []);

  const isTimerOver = days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

  return (
    <section
      ref={hoverRef}
      className="w-screen lg:h-screen hero-section relative overflow-hidden flex flex-col items-center justify-end"
    >
      <div id="nft" className="absolute top-0 -mt-32 h-32" />
      <div className="absolute hero-light left-1/2 -translate-x-1/2 top-0 w-full lg:w-[35%] z-[3] h-0 overflow-hidden">
        <Image
          src="/static/images/light.png"
          width={1200 * 2}
          height={1200 * 2}
          alt=""
          className="w-full"
        />
      </div>
      <h1
        style={bebas.style}
        className="pt-40 pb-10 text-5xl lg:hidden text-white px-4 text-center"
      >
        Founders Collection
      </h1>
      <Image
        src="/static/images/jimboStatue.png"
        width={1200}
        height={2200}
        alt=""
        className="w-full lg:w-auto hero-stat scale-90 max-w-[90%] object-contain object-bottom lg:h-[85%] z-[1]"
      />
      <div className="absolute z-[4] bottom-[10%] text-xl flex flex-col items-center gap-4">
        <button
          style={{
            boxShadow: "0px 0px 20px 5px rgba(255,54,0,0.42)",
            opacity: !isTimerOver ? 0.5 : 1,
            cursor: !isTimerOver ? "not-allowed" : "pointer",
            transform: !isTimerOver ? "scale(1) !important" : "",
          }}
          className="uppercase hover:scale-105 transition-transform duration-300 ease-out  rounded-full text-black tracking-tighter font-semibold text-lg lg:text-2xl px-10 lg:px-16 py-3 lg:py-4 bg-[#FF3600]"
        >
          {!isTimerOver ? "Mint Soon" : "Mint now"}
        </button>
        <span className="text-white">
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      </div>
      <div
        ref={cardRef}
        className="hidden select-none absolute hero-statue z-[0] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:flex justify-center"
      >
        <h1
          style={bebas.style}
          className="text-5xl lg:text-[10rem] whitespace-nowrap text-white flex flex-row items-center gap-[8vw] -mr-[4vw]"
        >
          <span>Founders</span> <span>Collection</span>
        </h1>
      </div>
      <div className="absolute z-[2] w-full h-1/3 left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
