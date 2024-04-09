import { useRouter } from "next/router";
import Nav from "./Navigation/Nav";
import MintItemDrawer from "./Home/MintSection/MintItemDrawer";
import Loader from "./Loader";
import { Lenis } from "@studio-freight/react-lenis";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const lenisRef = useRef<any>(null);
  const isSanity = router.pathname.includes("sanity");

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <div className="layout-wrapper w-screen overflow-x-hidden relative">
      <Lenis
        ref={lenisRef}
        autoRaf={false}
        root
        options={{
          lerp: 0.08,
          // smoothTouch: false,
          syncTouch: false,
        }}
      >
        <MintItemDrawer />
        {!isSanity && <Loader />}
        {!isSanity && <Nav />}
        {children}
      </Lenis>
    </div>
  );
}
