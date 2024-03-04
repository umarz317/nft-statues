import { bebas } from "@/pages/_app";

export default function SectionHeader({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className="section-header flex flex-col items-center relative z-10">
      <h2 style={bebas.style} className="text-8xl text-white uppercase">
        {title}
      </h2>
      <p className="text-[#A0A0A0] font-medium tracking-tighter text-center text-2xl">
        {description}
      </p>
    </div>
  );
}
