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
    const wrapper = ref.current as HTMLDivElement;
    const animIn = wrapper.querySelectorAll(
      ".anim-in"
    ) as NodeListOf<HTMLElement>;

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
      animIn,
      {
        y: "4rem",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
      },
      0
    );

    return () => {
      showTl.kill();
    };
  }, []);
  return (
    <div ref={ref} className="flex flex-col gap-2 lg:gap-4 w-full">
      <div
        style={bebas.style}
        className="flex flex-row items-center justify-between w-full gap-4"
      >
        <span className="text-4xl lg:text-6xl tracking-tight text-white anim-in">
          {question}
        </span>
        <span className="hidden lg:block text-6xl tracking-tight text-white anim-in">
          {number}
        </span>
      </div>
      <div className="w-full bg-[#A0A0A0]/30 h-[1px] divider anim-in" />
      <p className="text-[#A0A0A0] text-xl lg:text-3xl font-medium tracking-tighter anim-in">
        {answer}
      </p>
    </div>
  );
}

export default function FaQSection({}) {
  return (
    <section className="faq-section pt-64 pb-[15vh] w-screen relative flex flex-col items-center">
      <div id="faq" className="absolute top-0 -mt-32 h-32" />
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
