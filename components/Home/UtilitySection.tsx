import SectionHeader from "./SectionHeader";

export default function UtilitySection() {
  return (
    <section className="utility-section pt-64 w-screen relative h-screen">
      <div id="utility" className="absolute top-0 -mt-44 h-32" />
      <SectionHeader
        title={<>WHAT DO YOU GET?</>}
        description={
          <>
            Mint a Table Top, a Shorty, a Biggie
            <br />
            or a 2Mac Statue for your Home.
          </>
        }
      />
    </section>
  );
}
