import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { bebas } from "@/pages/_app";
import Link from "next/link";

export default function HeroSection({}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

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

    document.addEventListener("mousemove", (e) => handleMouseOver(e));

    return () => {
      document.removeEventListener("mousemove", (e) => handleMouseOver(e));
    };
  }, []);

  return (
    <section
      ref={hoverRef}
      className="w-screen h-screen hero-section relative overflow-hidden flex items-end justify-center"
    >
      <Image
        src="/static/images/light.png"
        width={1200 * 2}
        height={1200 * 2}
        alt=""
        className="absolute w-[40%] z-[3] left-1/2 -translate-x-1/2 top-0"
      />
      <Image
        src="/static/images/jimboStatue.png"
        width={1200}
        height={2200}
        alt=""
        className="w-auto h-[90%] z-[1]"
      />
      <Link
        href="/#mint"
        style={{
          boxShadow: "0px 0px 20px 5px rgba(255,54,0,0.42)",
        }}
        className="uppercase absolute z-[4] bottom-[15%] rounded-full text-black tracking-tighter font-semibold text-2xl px-16 py-4 bg-[#FF3600]"
      >
        Mint now
      </Link>
      <div
        ref={cardRef}
        className="absolute hero-statue z-[0] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <h1
          style={bebas.style}
          className="text-[12rem] whitespace-nowrap text-white"
        >
          YOUR DIGITAL STATUE NFT
        </h1>
      </div>
      <div className="absolute z-[2] w-full h-1/3 left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}