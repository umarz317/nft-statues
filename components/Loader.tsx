import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { gsap } from "@/lib/gsap";
import { LoaderMarquee } from "./MarqueeLoader";
import { bebas } from "@/pages/_app";
import { useRouter } from "next/router";

export default function Loader() {
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
    const html = document.querySelector("html") as HTMLElement;
    html.classList.add("locked");
    const tl = gsap.timeline({
      delay: 0.1,
    });
    tl.to(
      ".load-text",
      {
        opacity: 1,
        duration: 1,
      },
      0
    );
    tl.to(
      ".loading-bar",
      {
        y: 0,
        duration: 1,
      },
      0.15
    );

    const dotTl = gsap.timeline({
      repeat: 2,
      repeatDelay: 0.1,
      onComplete: () => {
        const tl = gsap.timeline({
          onStart: () => {
            window.scrollTo(0, 0);
          },
          onComplete: () => {
            const url = "#" + router.asPath.split("#").pop();
            if (url !== "#/") {
              const element = document.querySelector(url);
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }
          },
        });
        tl.to(
          ".load-text",
          {
            opacity: 0,
            duration: 1,
          },
          0
        );
        tl.to(
          ".loading-bar",
          {
            y: "100%",
            duration: 1,
          },
          0
        );
        tl.to(".load-wrapper", {
          opacity: 0,
          duration: 1,
          pointerEvents: "none",
        });

        tl.to(
          ".nav-wrapper",
          {
            y: 0,
            duration: 1,
          },
          1
        );
        tl.to(
          ".hero-light",
          {
            height: "auto",
          },
          1.1
        );
        tl.to(
          ".hero-stat",
          {
            scale: 1,
            ease: "elastic.out(1.1, 1)",
            duration: 2,
          },
          1
        );
        tl.call(
          () => {
            html.classList.remove("locked");
          },
          undefined,
          1
        );
      },
    });
    dotTl.to(".dot", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
    dotTl.to(".dot", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="z-[1100] load-wrapper fixed w-full h-full bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full lg:w-fit">
        <span
          style={bebas.style}
          className="w-fit load-text opacity-0 flex flex-row items-ends text-white text-4xl lg:text-5xl"
        >
          Loading
          <span className="dots">
            {" "}
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </span>
        <span className="block w-[70%] lg:w-96 overflow-hidden">
          <div className="w-full relative loading-bar translate-y-[100%] will-change-transform"></div>
        </span>
      </div>
      {/* <LoaderMarquee /> */}
    </div>
  );
}
