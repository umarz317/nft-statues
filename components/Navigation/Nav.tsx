import { useWalletContext } from "@/contexts/wallet";
import { bebas } from "@/pages/_app";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavItem({ href, text }: { href: string; text: string }) {
  const lenis = useLenis(() => {});

  return (
    <button
      // href={href}
      onClick={() => {
        lenis?.scrollTo(href);
      }}
      className="block text-white hover:text-[#ff3600] transition-colors duration-300 ease-out hover:drop-shadow-orange drop text-2xl tracking-tighter "
    >
      {text}
    </button>
  );
}

export default function Nav() {
  // const { handleMetamaskConnection, walletAddress, nfts } = useWalletContext();
  // console.log(walletAddress, nfts);

  return (
    <div className="fixed nav-wrapper z-[999] left-0 top-0 w-full px-4 lg:px-20 pt-8 -translate-y-[100%]">
      <div className="w-full backdrop-blur-lg relative rounded-full bg-[#1E1E1E]/50 py-6 lg:py-8 px-8 lg:px-16 flex flex-row items-center justify-between">
        <Link href="/" style={bebas.style} className="bloc">
          <Image
            src="/static/images/bascLogo.png"
            width={1000}
            height={300}
            alt="Basc Labs"
            className="w-24 lg:w-32"
          />
        </Link>
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex flex-row items-center gap-16">
          <NavItem href="#nft" text="NFT" />
          <NavItem href="#utility" text="Utility" />
          <NavItem href="#buy" text="Buy" />
          <NavItem href="#work" text="Work" />
          <NavItem href="#roadmap" text="Roadmap" />
          <NavItem href="#mint" text="Mint" />
          <NavItem href="#team" text="Team" />
          <NavItem href="#faq" text="FAQ" />
        </nav>
          <ConnectButton/>
      </div>
    </div>
  );
}
