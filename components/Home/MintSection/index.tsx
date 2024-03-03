import SectionHeader from "@/components/Home/SectionHeader";
import MintCarousel from "./MintCarousel";

export default function MintSection({ statues }: { statues: any[] }) {
  return (
    <section className="mint-section pt-16 w-screen relative h-screen">
      <div id="mint" className="absolute top-0 -mt-32 h-32" />
      <SectionHeader
        title={<>MINT</>}
        description={
          <>
            Mint a Table Top, a Shorty, a Biggie
            <br />
            or a 2Mac Statue for your Home.
          </>
        }
      />
      <MintCarousel statues={statues} />
    </section>
  );
}
