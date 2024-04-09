import { bebas } from "@/pages/_app";
import SectionHeader from "./SectionHeader";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    orange: ({ children }) => <span className="orange-word">{children}</span>,
  },
};

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
        start: "25% bottom",
        end: "60% center",
        // markers: true,
        scrub: 1,
      },
    });

    showTl.fromTo(
      animIn,
      {
        y: "4rem",
        scale: 0.95,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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
      <div className="text-[#A0A0A0] text-xl lg:text-3xl font-medium tracking-tighter anim-in">
        {answer}
      </div>
    </div>
  );
}

export default function FaQSection({ faqs }: { faqs: any[] }) {
  return (
    <section className="faq-section pt-64 pb-[15vh] w-screen relative flex flex-col items-center">
      <div id="faq" className="absolute top-0 -mt-32 h-32" />
      <SectionHeader
        title={<>FAQ</>}
        description={
          <>
            These are the most asked questions, if you
            <br />
            have any other questions please join our discord.
          </>
        }
      />
      <div className="mt-32 flex flex-col gap-16 lg:gap-24 px-4 lg:px-64 w-full">
        {faqs.map((faq, index) => (
          <FaQItem
            key={index}
            question={faq.question}
            answer={<PortableText value={faq.answer} components={components} />}
            number={index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
