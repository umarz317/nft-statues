import SectionHeader from "@/components/Home/SectionHeader";
import WorkCarousel from "./WorkCarousel";

export default function WorkSection() {
  return (
    <section className="work-section pt-16 w-screen relative h-screen">
      <div id="work" className="absolute top-0 -mt-32 h-32" />
      <SectionHeader
        title={<>Previous Statue Work</>}
        description={
          <>
            Mint a Table Top, a Shorty, a Biggie
            <br />
            or a 2Mac Statue for your Home.
          </>
        }
      />
      <WorkCarousel />
    </section>
  );
}
