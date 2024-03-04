import { bebas } from "@/pages/_app";
import Link from "next/link";

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="block text-white text-2xl tracking-tighter">
      {text}
    </Link>
  );
}

export default function Nav({}) {
  return (
    <div className="fixed z-[999] left-0 top-0 w-full px-20 pt-8">
      <div className="w-full backdrop-blur-lg relative rounded-full bg-[#1E1E1E]/50 py-8 px-16 flex flex-row items-center justify-between">
        <Link
          href="/"
          style={bebas.style}
          className="uppercase block text-white text-4xl -mb-1"
        >
          NFT Statues
        </Link>
        <nav className="absolute left-1/2 -translate-x-1/2 flex flex-row items-center gap-12">
          <NavItem href="/#nft" text="NFT" />
          <NavItem href="/#utility" text="Utility" />
          <NavItem href="/#work" text="Work" />
          <NavItem href="/#roadmap" text="Roadmap" />
          <NavItem href="/#mint" text="Mint" />
          <NavItem href="/#faq" text="FAQ" />
        </nav>
        <Link
          href="/"
          className="block text-[#FF3600] text-2xl font-medium tracking-tighter"
        >
          Connect Wallet
        </Link>
      </div>
    </div>
  );
}
