import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { bebas } from "@/pages/_app";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";

export default function SectionHeader({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const animInChar = ref.current!.querySelectorAll(
      ".anim-char"
    ) as NodeListOf<HTMLElement>;
    const animInLine = ref.current!.querySelectorAll(
      ".anim-line"
    ) as NodeListOf<HTMLElement>;

    const splitChars = SplitType.create(animInChar, {
      types: "words",
    }) as { words: HTMLElement[] };
    const splitLines = SplitType.create(animInLine, {
      types: "lines",
    }) as { lines: HTMLElement[] };

    splitChars.words.forEach((char) => {
      char.classList.add("anim-in-char");
    });

    splitLines.lines.forEach((line) => {
      line.classList.add("anim-in-line");
    });

    let animInTlFirst = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current!,
        start: "top 70%",
        // markers: true,
      },
      onComplete: () => {
        //@ts-expect-error
        splitChars.revert();
        //@ts-expect-error
        splitLines.revert();
      },
    });

    animInTlFirst.fromTo(
      splitChars.words,
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05 }
    );
    animInTlFirst.fromTo(
      splitLines.lines,
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05 },
      0.2
    );
  }, []);

  return (
    <div
      ref={ref}
      className="section-header flex flex-col items-center relative z-10"
    >
      <h2
        style={bebas.style}
        className="anim-char text-8xl text-white uppercase"
      >
        {title}
      </h2>
      <p className="text-[#A0A0A0] anim-line font-medium tracking-tighter text-center text-2xl">
        {description}
      </p>
    </div>
  );
}
