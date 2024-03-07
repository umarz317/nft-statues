import { bebas } from "@/pages/_app";
import SectionHeader from "./SectionHeader";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";

function FaQItem({
  question,
  answer,
  number,
}: {
  question: string;
  answer: React.ReactNode;
  number: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const animInChar = ref.current!.querySelectorAll(
      ".anim-char"
    ) as NodeListOf<HTMLElement>;
    const animInLine = ref.current!.querySelectorAll(
      ".anim-line"
    ) as NodeListOf<HTMLElement>;
    const divider = ref.current!.querySelector(".divider") as HTMLElement;

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
        start: "-10% 90%",
        end: "bottom 75%",
        scrub: 2,
        // markers: true,
      },
      //   onComplete: () => {
      //     //@ts-expect-error
      //     splitChars.revert();
      //     //@ts-expect-error
      //     splitLines.revert();
      //   },
    });

    animInTlFirst.fromTo(
      [splitChars.words, splitLines.lines, divider],
      { y: "100%", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05 }
    );
  }, []);
  return (
    <div ref={ref} className="flex flex-col gap-2 lg:gap-4 w-full">
      <div
        style={bebas.style}
        className="flex flex-row items-center justify-between w-full gap-4"
      >
        <span className="text-4xl lg:text-6xl tracking-tight text-white anim-line">
          {question}
        </span>
        <span className="hidden lg:blocktext-6xl tracking-tight text-white anim-char">
          {number}
        </span>
      </div>
      <div className="w-full bg-[#A0A0A0]/30 h-[1px] divider" />
      <p className="text-[#A0A0A0] text-xl lg:text-3xl font-medium tracking-tighter anim-line">
        {answer}
      </p>
    </div>
  );
}

export default function FaQSection({}) {
  return (
    <section className="faq-section py-64 w-screen relative flex flex-col items-center">
      <SectionHeader
        title={<>FAQ</>}
        description={
          <>
            Mint a Table Top, a Shorty, a Biggie
            <br />
            or a 2Mac Statue for your Home.
          </>
        }
      />
      <div className="mt-32 flex flex-col gap-16 lg:gap-24 px-4 lg:px-64 w-full">
        <FaQItem
          question="What collections qualify?"
          answer={
            <>
              <span className="text-[#ff3600]">Bored Ape Yacht Club</span> and{" "}
              <span className="text-[#ff3600]">RTFKT</span>.
            </>
          }
          number="01"
        />
        <FaQItem
          question="Why only those collections"
          answer={
            <>
              <span className="text-[#ff3600]">More collections </span> will be
              available in <span className="text-[#ff3600]">later</span>{" "}
              collections we drop.
            </>
          }
          number="02"
        />
        <FaQItem
          question="Do I have to forge my statue?"
          answer={
            <>
              <span className="text-[#ff3600]">No you do not </span>need to
              forge your statue, you can wait until other collections open up.
            </>
          }
          number="03"
        />
        <FaQItem
          question="Can I sell my NFT and not sell my statue?"
          answer={
            <>
              <span className="text-[#ff3600]">Anything is possible</span>, but
              the NFT is there to{" "}
              <span className="text-[#ff3600]">verify the ownership </span>
              of the statue and should be treated as so.
            </>
          }
          number="04"
        />
        <FaQItem
          question="When can we forge?"
          answer={
            <>
              <span className="text-[#ff3600]">Forging will open</span> right
              after the release.
            </>
          }
          number="05"
        />
      </div>
    </section>
  );
}
