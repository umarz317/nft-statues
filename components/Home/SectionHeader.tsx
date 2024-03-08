import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { bebas } from "@/pages/_app";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect } from "react";

export default function SectionHeader({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  function SplitText() {
    const text = textRef.current as HTMLParagraphElement;

    const splitText = SplitType.create(text, {
      types: "lines",
      lineClass: "split-lines",
    });

    splitText.lines?.forEach((line) => {
      line.style.opacity = "0";
      line.style.transform = "translateY(4rem)";
    });

    return splitText;
  }

  function SplitTitle() {
    const title = titleRef.current as HTMLHeadingElement;

    const splitTitle = SplitType.create(title, {
      types: "words",
      wordClass: "split-words",
    });

    splitTitle.words?.forEach((word) => {
      word.style.opacity = "0";
      word.style.transform = "translateY(4rem)";
    });

    return splitTitle;
  }

  useIsomorphicLayoutEffect(() => {
    const splitText = SplitText();
    const splitTitle = SplitTitle();
    let prevWidth = window.innerWidth;
    function SplitTextResize() {
      if (prevWidth !== window.innerWidth) {
        const text = textRef.current as HTMLParagraphElement;
        const title = titleRef.current as HTMLHeadingElement;

        const splitText = SplitType.create(text, {
          types: "lines",
          lineClass: "split-lines",
        });
        const splitTitle = SplitType.create(title, {
          types: "words",
          wordClass: "split-words",
        });

        prevWidth = window.innerWidth;
      }
    }

    window.addEventListener("resize", SplitTextResize);

    const wrapper = ref.current as HTMLDivElement;
    const textLines = textRef.current?.querySelectorAll(
      ".split-lines"
    ) as NodeListOf<HTMLSpanElement>;
    const textWords = titleRef.current?.querySelectorAll(
      ".split-words"
    ) as NodeListOf<HTMLSpanElement>;

    const showTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 70%",
        end: "60% center",
        // markers: true,
        scrub: 1,
      },
    });

    showTl.fromTo(
      textWords,
      {
        y: "4rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      0
    );
    showTl.fromTo(
      textLines,
      {
        y: "4rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      },
      0
    );

    return () => {
      showTl.kill();
      window.removeEventListener("resize", SplitTextResize);
      splitText.revert();
      splitTitle.revert();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="section-header flex flex-col items-center relative z-10 px-4"
    >
      <h2
        ref={titleRef}
        style={bebas.style}
        className="text-center text-5xl lg:text-8xl text-white uppercase"
      >
        {title}
      </h2>
      <p
        ref={textRef}
        className="text-[#A0A0A0] font-medium tracking-tighter text-center text-lg lg:text-2xl"
      >
        {description}
      </p>
    </div>
  );
}
