import SectionHeader from "@/components/Home/SectionHeader";
import TeamCarousel from "./TeamCarousel";

export default function TeamSection({ teamMembers }: { teamMembers: any[] }) {
  return (
    <section className="team-section pt-16 lg:pt-24 w-screen relative lg:min-h-screen">
      <div id="team" className="absolute top-0 -mt-32 h-32" />
      <SectionHeader
        title={<>Our Team</>}
        description={
          <>
            Meet the team behind the project. <br />A group of passionate
            individuals.
          </>
        }
      />
      <TeamCarousel teamMembers={teamMembers} />
    </section>
  );
}
