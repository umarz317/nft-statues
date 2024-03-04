import { useRouter } from "next/router";
import Nav from "./Navigation/Nav";
import MintItemDrawer from "./Home/MintSection/MintItemDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isSanity = router.pathname.includes("sanity");
  return (
    <div className="layout-wrapper w-screen overflow-hidden">
      <MintItemDrawer />
      {!isSanity && <Nav />}
      {children}
    </div>
  );
}
