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
    const tl = gsap.timeline();
    tl.to(
      ".load-text",
      {
        opacity: 1,
        duration: 1,
      },
      0
    );
    tl.to(
      ".load-line",
      {
        y: 0,
        duration: 1,
      },
      0
    );

    const dotTl = gsap.timeline({
      repeat: 3,
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
          ".load-line",
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
      <div className="flex flex-col items-center gap-6">
        <span
          style={bebas.style}
          className="w-fit load-text opacity-0 flex flex-row items-ends text-white text-5xl"
        >
          Loading
          <span className="dots">
            {" "}
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </span>
        <span className="block w-96 overflow-hidden">
          <svg
            width="100%"
            className="load-line translate-y-[100%]"
            viewBox="0 0 425 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5 0.257809L23.0009 0.254035L17.5009 9.25404L35.0009 9.25404L40.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M40.5 0.257809L23.0009 0.254035L17.5009 9.25404L35.0009 9.25404L40.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M23 0.257812L5.50093 0.254039L0.00093075 9.25404L17.5009 9.25404L23 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M23 0.257812L5.50093 0.254039L0.00093075 9.25404L17.5009 9.25404L23 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M75.5 0.257809L58.0009 0.254035L52.5009 9.25404L70.0009 9.25404L75.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M75.5 0.257809L58.0009 0.254035L52.5009 9.25404L70.0009 9.25404L75.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M58 0.257812L40.5009 0.254039L35.0009 9.25404L52.5009 9.25404L58 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M58 0.257812L40.5009 0.254039L35.0009 9.25404L52.5009 9.25404L58 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M110.5 0.257809L93.0009 0.254035L87.5009 9.25404L105.001 9.25404L110.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M110.5 0.257809L93.0009 0.254035L87.5009 9.25404L105.001 9.25404L110.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M93 0.257812L75.5009 0.254039L70.0009 9.25404L87.5009 9.25404L93 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M93 0.257812L75.5009 0.254039L70.0009 9.25404L87.5009 9.25404L93 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M145.5 0.257809L128.001 0.254035L122.501 9.25404L140.001 9.25404L145.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M145.5 0.257809L128.001 0.254035L122.501 9.25404L140.001 9.25404L145.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M128 0.257812L110.501 0.254039L105.001 9.25404L122.501 9.25404L128 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M128 0.257812L110.501 0.254039L105.001 9.25404L122.501 9.25404L128 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M180.5 0.257809L163.001 0.254035L157.501 9.25404L175.001 9.25404L180.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M180.5 0.257809L163.001 0.254035L157.501 9.25404L175.001 9.25404L180.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M163 0.257812L145.501 0.254039L140.001 9.25404L157.501 9.25404L163 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M163 0.257812L145.501 0.254039L140.001 9.25404L157.501 9.25404L163 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M215.5 0.257809L198.001 0.254035L192.501 9.25404L210.001 9.25404L215.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M215.5 0.257809L198.001 0.254035L192.501 9.25404L210.001 9.25404L215.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M198 0.257812L180.501 0.254039L175.001 9.25404L192.501 9.25404L198 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M198 0.257812L180.501 0.254039L175.001 9.25404L192.501 9.25404L198 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M250.5 0.257809L233.001 0.254035L227.501 9.25404L245.001 9.25404L250.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M250.5 0.257809L233.001 0.254035L227.501 9.25404L245.001 9.25404L250.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M233 0.257812L215.501 0.254039L210.001 9.25404L227.501 9.25404L233 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M233 0.257812L215.501 0.254039L210.001 9.25404L227.501 9.25404L233 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M285.5 0.257809L268.001 0.254035L262.501 9.25404L280.001 9.25404L285.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M285.5 0.257809L268.001 0.254035L262.501 9.25404L280.001 9.25404L285.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M268 0.257812L250.501 0.254039L245.001 9.25404L262.501 9.25404L268 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M268 0.257812L250.501 0.254039L245.001 9.25404L262.501 9.25404L268 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M320.5 0.257809L303.001 0.254035L297.501 9.25404L315.001 9.25404L320.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M320.5 0.257809L303.001 0.254035L297.501 9.25404L315.001 9.25404L320.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M303 0.257812L285.501 0.254039L280.001 9.25404L297.501 9.25404L303 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M303 0.257812L285.501 0.254039L280.001 9.25404L297.501 9.25404L303 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M355.5 0.257809L338.001 0.254035L332.501 9.25404L350.001 9.25404L355.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M355.5 0.257809L338.001 0.254035L332.501 9.25404L350.001 9.25404L355.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M338 0.257812L320.501 0.254039L315.001 9.25404L332.501 9.25404L338 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M338 0.257812L320.501 0.254039L315.001 9.25404L332.501 9.25404L338 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M390.5 0.257809L373.001 0.254035L367.501 9.25404L385.001 9.25404L390.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M390.5 0.257809L373.001 0.254035L367.501 9.25404L385.001 9.25404L390.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M373 0.257812L355.501 0.254039L350.001 9.25404L367.501 9.25404L373 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M373 0.257812L355.501 0.254039L350.001 9.25404L367.501 9.25404L373 0.257812Z"
              fill="#FF0000"
            />
            <path
              d="M425.5 0.257809L408.001 0.254035L402.501 9.25404L420.001 9.25404L425.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M425.5 0.257809L408.001 0.254035L402.501 9.25404L420.001 9.25404L425.5 0.257809Z"
              fill="#0F0F0F"
            />
            <path
              d="M408 0.257812L390.501 0.254039L385.001 9.25404L402.501 9.25404L408 0.257812Z"
              fill="#0F0F0F"
            />
            <path
              d="M408 0.257812L390.501 0.254039L385.001 9.25404L402.501 9.25404L408 0.257812Z"
              fill="#FF0000"
            />
          </svg>
        </span>
      </div>
      {/* <LoaderMarquee /> */}
    </div>
  );
}
