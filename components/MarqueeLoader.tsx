import { GeistSans } from "geist/font/sans";
import { Observer } from "gsap/dist/Observer";
import { useEffect, useRef } from "react";
import horizontalLoop from "@/lib/helpers/horizontalLoop";
import gsap from "gsap";
gsap.registerPlugin(Observer);

export const LoaderMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loop = horizontalLoop(".loader-marquee .marquee-item", {
      repeat: -1,
      speed: 1.5,
      paddingRight: 0,
    });

    return () => {
      loop.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden loader-marquee w-44 flex items-center">
      <div
        ref={containerRef}
        className="flex flex-row items-center w-64 relative"
      >
        {/* <LoaderItem />
        <LoaderItem />
        <LoaderItem />
        <LoaderItem /> */}
      </div>
    </div>
  );
};
