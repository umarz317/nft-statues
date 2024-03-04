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
    <div className="flex flex-row items-center gap-4">
      <span
        style={bebas.style}
        className="block text-white text-7xl -mb-3 tracking-tighter"
      >
        {number}
      </span>
      <p className="text-white font-medium tracking-tighter uppercase text-[1.65rem] leading-tight">
        <span className="text-[#ff3600] font-bold">{keyword}</span>{" "}
        {description}
      </p>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section className="roadmap-section pt-16 w-screen relative flex flex-col items-center pb-64">
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
      <div className="flex flex-row mt-32 px-40">
        <div className="flex flex-col gap-[20%] mt-24 -mr-[8vw] z-[1]">
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
        <div className="z-0 relative">
          <div className="h-1/3 w-full absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent" />
          <Image
            src="/static/images/jimboStatue2.png"
            width={1200}
            height={1200}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[20%] mt-24 -ml-[8vw] z-[1]">
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
