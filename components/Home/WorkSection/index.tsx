import SectionHeader from "@/components/Home/SectionHeader";
import WorkCarousel from "./WorkCarousel";

export default function WorkSection({ works }: { works: any[] }) {
  return (
    <section className="work-section pt-16 lg:pt-32 w-screen relative lg:min-h-screen">
      <div id="work" className="absolute top-0 -mt-32 h-32" />
      <SectionHeader
        title={<>Previous Statue Work</>}
        description={
          <>
            We have partnered with the best statue and art makers in the region.
            <br />
            The work below is all 3D printed or handmade with love from Egypt.
          </>
        }
      />
      <WorkCarousel works={works} />
    </section>
  );
}
