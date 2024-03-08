import { bebas } from "@/pages/_app";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

function RoadmapStep({
  number,
  keyword,
  description,
}: {
  number: string;
  keyword: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center gap-4 py-4 lg:py-0 border-b-[1px] border-[#a0a0a0]/20 lg:border-none">
      <span
        style={bebas.style}
        className="block text-white text-6xl lg:text-7xl -mb-1 lg:-mb-3 tracking-tighter"
      >
        {number}
      </span>
      <p className="text-white font-medium tracking-tighter uppercase text-[1.25rem] leading-tight">
        <span className="text-[#ff3600] font-bold">{keyword}</span>{" "}
        {description}
      </p>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section className="roadmap-section pt-16 w-screen relative flex flex-col items-center pb-24 lg:pb-64">
      <div id="roadmap" className="absolute top-0 -mt-32 h-32" />
      <SectionHeader
        title={<>ROADMAP</>}
        description={
          <>
            Mint a Table Top, a Shorty, a Biggie
            <br />
            or a 2Mac Statue for your Home.
          </>
        }
      />
      <div className="flex flex-col lg:flex-row mt-12 lg:mt-32 px-8 lg:px-40">
        <div className="order-1 flex flex-col lg:gap-[20%] lg:mt-24 lg:-mr-[8vw] z-[1]">
          <RoadmapStep
            number="01"
            keyword="Release"
            description={
              <>
                founder <br /> collection
              </>
            }
          />
          <RoadmapStep
            number="02"
            keyword="FORGING"
            description={
              <>
                <br />
                begins
              </>
            }
          />
          <RoadmapStep
            number="03"
            keyword="Launch"
            description={
              <>
                the <br /> online museum
              </>
            }
          />
        </div>
        <div className="order-4 lg:order-2 z-0 relative mt-8 lg:mt-0 flex justify-center">
          <div className="h-1/3 w-full absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent z-20" />
          <span className="block w-1/3 absolute z-0 top-[12%] -translate-x-[6%]">
            <svg
              style={{
                filter: "drop-shadow(0px 0px 40px rgba(255,255,255,1))",
              }}
              width="100%"
              viewBox="0 0 979 979"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="489.5"
                cy="489.5"
                r="470.5"
                stroke="white"
                strokeWidth="38"
              />
            </svg>
          </span>
          <Image
            src="/static/images/jimboStatue2.png"
            width={1200}
            className="z-10"
            height={1200}
            alt=""
          />
        </div>
        <div className="order-3 flex flex-col lg:gap-[20%] lg:mt-24 lg:-ml-[8vw] z-[1]">
          <RoadmapStep
            number="04"
            keyword="Delivery"
            description={
              <>
                <br /> begins
              </>
            }
          />
          <RoadmapStep
            number="05"
            keyword="Release"
            description={
              <>
                AR AND
                <br />
                VR ENVIROMENTS
              </>
            }
          />
          <RoadmapStep
            number="06"
            keyword="Release"
            description={
              <>
                2024 <br /> spring collection
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
