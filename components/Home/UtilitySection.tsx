import { bebas } from "@/pages/_app";
import SectionHeader from "./SectionHeader";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayout";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

function TextBox({
  title,
  text,
}: {
  title: React.ReactNode;
  text: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    const box = ref.current as HTMLDivElement;
    const showTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".utility-section",
        start: "35% bottom",
        end: "60% center",
        // markers: true,
        scrub: 1,
      },
    });

    showTl.fromTo(
      box,
      {
        y: "8rem",
        scale: 0.9,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
      },
      0
    );
  }, []);

  return (
    <div
      ref={ref}
      className="w-full lg:w-1/2 flex flex-col items-start bg-[#1E1E1E]/50 rounded-3xl p-8 lg:p-16 3xl:p-20 gap-4 relative"
    >
      <div className="angles">
        <svg
          width="8"
          height="8"
          className="absolute -top-1 -left-1"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.507099"
            y1="2.21659e-08"
            x2="0.507099"
            y2="7.60648"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
          <line
            x1="7.60938"
            y1="0.507099"
            x2="0.00289154"
            y2="0.507099"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
        </svg>
        <svg
          width="8"
          height="8"
          className="absolute -bottom-1 -left-1 -rotate-90"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.507099"
            y1="2.21659e-08"
            x2="0.507099"
            y2="7.60648"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
          <line
            x1="7.60938"
            y1="0.507099"
            x2="0.00289154"
            y2="0.507099"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
        </svg>
        <svg
          width="8"
          height="8"
          className="absolute -bottom-1 -right-1 scale-[-1]"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.507099"
            y1="2.21659e-08"
            x2="0.507099"
            y2="7.60648"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
          <line
            x1="7.60938"
            y1="0.507099"
            x2="0.00289154"
            y2="0.507099"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
        </svg>
        <svg
          width="8"
          height="8"
          className="absolute -top-1 -right-1 rotate-90"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.507099"
            y1="2.21659e-08"
            x2="0.507099"
            y2="7.60648"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
          <line
            x1="7.60938"
            y1="0.507099"
            x2="0.00289154"
            y2="0.507099"
            stroke="#FF3600"
            strokeWidth="1.0142"
          />
        </svg>
      </div>
      <span
        style={bebas.style}
        className="text-3xl lg:text-4xl 3xl:text-5xl text-[#ff3600]"
      >
        {title}
      </span>
      <p className="text-[#A0A0A0] leading-tight lg:leading-normal text-base lg:text-lg 3xl:text-xl font-semibold tracking-tighter">
        {text}
      </p>
    </div>
  );
}

export default function UtilitySection() {
  return (
    <section className="utility-section pt-32 lg:pt-64 w-screen relative lg:min-h-screen pb-32">
      <div id="utility" className="absolute top-0 -mt-44 h-32" />
      <SectionHeader
        title={<>WHAT DO YOU GET?</>}
        description={
          <>
            We have partnered with the best statue and art makers in the region.
            <br />
            The work below is all 3D printed or handmade with love from Egypt.
          </>
        }
      />
      <div className="mt-16 flex flex-col items-center w-full px-4 lg:px-24 gap-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <TextBox
            title="Physical Real World Statue Delivered Worldwide:"
            text="Elevate your space with a tangible manifestation of your NFT – a Physical Real World Statue. 
Meticulously forged and delivered to your doorstep worldwide, this handcrafted masterpiece 
bridges the gap between the virtual and the real. Experience the pride of showcasing your BASC 
STATUE in the physical world, making a statement that transcends borders."
          />
          <TextBox
            title="AR Filters with Your Digital and Physical Statues:"
            text="Immerse yourself in the magic of augmented reality with exclusive AR filters. Watch as your 
            Digital Statue comes to life in your surroundings, and overlay enchanting effects onto your 
            Physical Real World Statue. Explore the dynamic synergy between the virtual and the physical, 
            creating an interactive and captivating experience unique to BASC STATUES."
          />
        </div>
        <TextBox
          title="Displayed in the Founders Section of Our Museum:"
          text="Secure your place in history as a founder of BASC STATUES. Your Digital and Physical Statues will 
          be prominently featured in the esteemed Founders Section of our online Museum. This curated 
          space honors the pioneers of our collection, showcasing the lasting legacy of BASC and the 
          vibrant community behind it. Join the ranks of esteemed collectors in our digital hall of fame."
        />
      </div>
    </section>
  );
}
