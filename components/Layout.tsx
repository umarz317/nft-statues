import { useRouter } from "next/router";
import Nav from "./Navigation/Nav";
import MintItemDrawer from "./Home/MintSection/MintItemDrawer";
import Loader from "./Loader";
import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import MintDrawer from "./Home/MintSection/MintDrawer";
import MintFormDrawer from "./Home/MintSection/MintFormDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const lenisRef = useRef<any>(null);
  const isSanity = router.pathname.includes("sanity");
  const lenis = useLenis(() => {});

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  useEffect(() => {
    window.onload = (_) => {
      lenis?.scrollTo(0, {
        immediate: true,
        force: true,
      });
    };
  }, [lenis]);

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
        <MintDrawer />
        <MintFormDrawer />
        {!isSanity && <Loader />}
        {!isSanity && <Nav />}
        {children}
      </Lenis>
    </div>
  );
}
