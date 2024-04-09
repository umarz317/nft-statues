import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import HeroSection from "@/components/Home/HeroSection";
import UtilitySection from "@/components/Home/UtilitySection";
import WorkSection from "@/components/Home/WorkSection";
import RoadmapSection from "@/components/Home/Roadmap";
import MintSection from "@/components/Home/MintSection";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity/sanityClient";
import Marquee from "@/components/Marquee";
import FaQSection from "@/components/Home/FaQSection";

const inter = Inter({ subsets: ["latin"] });

const statuesQuery = groq`*[_type == 'statue'] | order(orderRank)`;
const faqQuery = groq`*[_type == 'faq'] | order(orderRank)`;
const worksQuery = groq`*[_type == 'works'] | order(orderRank)`;

const socials = [
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.40624 12.2762L1.48878 12.1448L6.46569 4.2595C6.53843 4.14406 6.70943 4.15599 6.76445 4.2814C7.59592 6.16862 8.31336 8.51572 7.97725 9.97693C7.83376 10.5781 7.44064 11.3923 6.99836 12.1448C6.94138 12.2544 6.87848 12.3619 6.81163 12.4654C6.78018 12.5131 6.72711 12.541 6.6701 12.541H1.55168C1.41409 12.541 1.3335 12.3897 1.40624 12.2762Z"
          fill="currentColor"
        />
        <path
          d="M23.5872 13.7421V14.9903C23.5872 15.062 23.544 15.1257 23.4811 15.1535C23.0958 15.3207 21.7769 15.9339 21.2285 16.7063C19.829 18.6791 18.7597 21.5 16.3695 21.5H6.39802C2.8639 21.5 0 18.5896 0 14.9982V14.8828C0 14.7872 0.0766413 14.7096 0.170999 14.7096H5.72975C5.83979 14.7096 5.92038 14.8131 5.91058 14.9226C5.87125 15.2889 5.93809 15.6632 6.10909 16.0036C6.43931 16.6824 7.12334 17.1065 7.8624 17.1065H10.6143V14.9306H7.89385C7.7543 14.9306 7.67177 14.7673 7.75235 14.6519C7.78181 14.6061 7.81526 14.5583 7.85061 14.5046C8.10812 14.1343 8.47568 13.559 8.84129 12.904C9.09092 12.4621 9.33267 11.9903 9.52727 11.5165C9.56661 11.4309 9.59802 11.3432 9.62948 11.2576C9.68255 11.1063 9.73761 10.965 9.77691 10.8237C9.81624 10.7042 9.84765 10.5788 9.87911 10.4613C9.97151 10.0592 10.0108 9.6332 10.0108 9.19126C10.0108 9.01808 10.003 8.83691 9.98724 8.66372C9.97936 8.47461 9.95579 8.28545 9.93218 8.09634C9.91645 7.92912 9.88699 7.76388 9.85554 7.5907C9.81624 7.33787 9.76118 7.08706 9.69827 6.8342L9.67665 6.73868C9.62948 6.56545 9.59018 6.40025 9.53516 6.22706C9.37985 5.68356 9.201 5.15404 9.01229 4.65835C8.94349 4.46126 8.86486 4.27214 8.78623 4.08303C8.67029 3.79835 8.55232 3.53956 8.44423 3.29468C8.38921 3.18319 8.34203 3.08166 8.29485 2.97815C8.24178 2.86069 8.18676 2.74323 8.13169 2.63178C8.0924 2.54617 8.04717 2.46654 8.01572 2.3869L7.67961 1.75782C7.63243 1.67222 7.71107 1.57069 7.80343 1.59657L9.90666 2.17387H9.91255C9.91645 2.17387 9.91844 2.17589 9.92039 2.17589L10.1975 2.25351L10.5022 2.34113L10.6143 2.37295V1.10686C10.6143 0.495686 11.0978 0 11.6954 0C11.9941 0 12.2654 0.123427 12.46 0.324477C12.6545 0.525565 12.7764 0.800283 12.7764 1.10686V2.98613L13.0005 3.0498C13.0182 3.05581 13.0359 3.06375 13.0516 3.07569C13.1067 3.1175 13.1853 3.1792 13.2855 3.25488C13.3641 3.31855 13.4487 3.39621 13.5509 3.47585C13.7533 3.64105 13.9951 3.85408 14.2605 4.09896C14.3312 4.16065 14.4 4.22436 14.4629 4.28807C14.8049 4.61057 15.1882 4.9888 15.5538 5.40686C15.656 5.52432 15.7563 5.64376 15.8585 5.76916C15.9607 5.89658 16.0688 6.02198 16.1631 6.14743C16.287 6.31465 16.4207 6.48783 16.5366 6.669C16.5917 6.7546 16.6546 6.84219 16.7076 6.92779C16.857 7.1567 16.9887 7.39364 17.1145 7.63053C17.1676 7.74001 17.2226 7.85945 17.2698 7.9769C17.4093 8.29344 17.5194 8.61594 17.5902 8.93844C17.6118 9.00812 17.6275 9.08376 17.6354 9.15146V9.16739C17.659 9.26292 17.6669 9.36445 17.6747 9.46796C17.7061 9.79844 17.6904 10.1289 17.6197 10.4613C17.5902 10.6027 17.5509 10.7361 17.5037 10.8774C17.4565 11.0128 17.4093 11.1541 17.3484 11.2875C17.2305 11.5642 17.0909 11.8409 16.9258 12.0997C16.8727 12.1953 16.8098 12.2968 16.7469 12.3924C16.6781 12.4939 16.6074 12.5895 16.5445 12.683C16.458 12.8025 16.3656 12.9279 16.2713 13.0394C16.1867 13.1568 16.1003 13.2743 16.0059 13.3778C15.8742 13.5351 15.7484 13.6844 15.6167 13.8277C15.5381 13.9213 15.4536 14.0168 15.3671 14.1024C15.2826 14.198 15.1961 14.2836 15.1174 14.3632C14.9858 14.4966 14.8757 14.6001 14.7833 14.6857L14.5671 14.8868C14.5356 14.9147 14.4944 14.9306 14.4511 14.9306H12.7764V17.1065H14.8835C15.3553 17.1065 15.8035 16.9372 16.1651 16.6267C16.2889 16.5172 16.8295 16.0434 17.4683 15.3287C17.4899 15.3048 17.5175 15.2869 17.5489 15.279L23.3691 13.5749C23.4772 13.543 23.5872 13.6266 23.5872 13.7421Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: "https://opensea.io/basclabs",
  },
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.653726 0.914062L8.29557 11.4906L0.605469 20.0898H2.3362L9.06887 12.5611L14.5087 20.0898H20.3984L12.3266 8.91835L19.4845 0.914062H17.7538L11.5533 7.84787L6.54347 0.914062H0.653726ZM3.1989 2.23368H5.90466L17.8529 18.77H15.1471L3.1989 2.23368Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: "https://twitter.com/bayc9797",
  },
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2045 0H5.79508C2.59968 0 0 2.5998 0 5.79521V15.2047C0 18.4002 2.59968 20.9999 5.79508 20.9999H15.2045C18.4002 20.9999 20.9999 18.4001 20.9999 15.2047V5.79521C21 2.5998 18.4002 0 15.2045 0ZM19.1368 15.2047C19.1368 17.3728 17.3728 19.1367 15.2047 19.1367H5.79508C3.62705 19.1368 1.86321 17.3728 1.86321 15.2047V5.79521C1.86321 3.62717 3.62705 1.86321 5.79508 1.86321H15.2045C17.3727 1.86321 19.1367 3.62717 19.1367 5.79521V15.2047H19.1368Z"
          fill="currentColor"
        />
        <path
          d="M10.501 5.08594C7.51723 5.08594 5.08984 7.51333 5.08984 10.4971C5.08984 13.4807 7.51723 15.908 10.501 15.908C13.4847 15.908 15.9121 13.4807 15.9121 10.4971C15.9121 7.51333 13.4847 5.08594 10.501 5.08594ZM10.501 14.0446C8.54473 14.0446 6.95305 12.4532 6.95305 10.4969C6.95305 8.54058 8.54461 6.94902 10.501 6.94902C12.4574 6.94902 14.0489 8.54058 14.0489 10.4969C14.0489 12.4532 12.4572 14.0446 10.501 14.0446Z"
          fill="currentColor"
        />
        <path
          d="M16.1398 3.50781C15.7808 3.50781 15.4282 3.65314 15.1746 3.90778C14.9199 4.16118 14.7734 4.51395 14.7734 4.87417C14.7734 5.23327 14.92 5.58591 15.1746 5.84055C15.428 6.09395 15.7808 6.24052 16.1398 6.24052C16.5 6.24052 16.8515 6.09395 17.1062 5.84055C17.3608 5.58591 17.5061 5.23315 17.5061 4.87417C17.5061 4.51395 17.3608 4.16118 17.1062 3.90778C16.8528 3.65314 16.5 3.50781 16.1398 3.50781Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: "https://www.instagram.com/bayc9797",
  },
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.4129 2.00996C23.4418 1.05745 21.361 0.381713 19.2236 0C18.9311 0.551901 18.6665 1.11973 18.4308 1.70112C16.1541 1.33898 13.8388 1.33898 11.562 1.70112C11.3262 1.11979 11.0615 0.551968 10.7692 0C8.63041 0.384937 6.54825 1.06228 4.57524 2.01494C0.658305 8.132 -0.403514 14.0971 0.127396 19.9776C2.42125 21.7665 4.98873 23.127 7.71822 24C8.33283 23.1275 8.87667 22.2018 9.34399 21.2329C8.45639 20.883 7.59969 20.4512 6.78382 19.9427C6.99855 19.7783 7.20855 19.609 7.41148 19.4446C9.78546 20.623 12.3765 21.234 14.9999 21.234C17.6233 21.234 20.2144 20.623 22.5884 19.4446C22.7937 19.6214 23.0037 19.7908 23.2161 19.9427C22.3986 20.4521 21.5404 20.8846 20.6512 21.2354C21.1179 22.2039 21.6618 23.1287 22.2769 24C25.0088 23.1305 27.5782 21.7707 29.8725 19.9801C30.4954 13.1606 28.8083 7.25031 25.4129 2.00996ZM10.0165 16.3611C8.53701 16.3611 7.31473 14.944 7.31473 13.2005C7.31473 11.457 8.49453 10.0274 10.0118 10.0274C11.529 10.0274 12.7418 11.457 12.7159 13.2005C12.6899 14.944 11.5243 16.3611 10.0165 16.3611ZM19.9834 16.3611C18.5016 16.3611 17.284 14.944 17.284 13.2005C17.284 11.457 18.4638 10.0274 19.9834 10.0274C21.503 10.0274 22.7064 11.457 22.6804 13.2005C22.6545 14.944 21.4912 16.3611 19.9834 16.3611Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: "https://discord.1upnova.com/",
  },
];

export default function Home({
  statues,
  faqs,
  works,
}: {
  statues: any[];
  faqs: any[];
  works: any[];
}) {
  return (
    <>
      <Head>
        <title>NFT Statues</title>
        <meta
          name="description"
          content="Just some statues, but on the blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="NFT Statues" />
        <meta property="og:title" content="NFT Statues" />
        {/* <meta property="og:url" content="https://sohub.digital" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Just some statues, but on the blockchain."
        />
        <meta
          property="og:image"
          content="https://nft-statues.vercel.app/shareThumb.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="nft statues" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#ff3600" />
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="bg-black">
        <HeroSection />
        <Marquee
          identifier="utilities-marq"
          text1="Minting Soon"
          text2="Turn your digital asset into your real life statue"
        />
        <UtilitySection />
        <WorkSection works={works} />
        <Marquee
          identifier="roadmap-marq"
          className="rotate-[-2.5deg] py-32"
          text1="Entering roadmap section"
          text2="Keep scrolling"
        />
        <RoadmapSection />
        <MintSection statues={statues} />
        <FaQSection faqs={faqs} />
        <div className="w-full flex flex-col items-center py-24 gap-8">
          <div className="socials-btns flex flex-row items-center gap-6">
            {socials.map((social, i) => (
              <Link
                className="size-16 hover:scale-110 transition-transform duration-200 ease-out bg-[#FFFFFF] rounded-full flex items-center justify-center"
                href={social.link}
                target="_blank"
                key={i}
              >
                <span className="w-6 block">{social.icon}</span>
              </Link>
            ))}
          </div>
          <span className="text-xl font-medium tracking-tighter text-[#A0A0A0]">
            BASC Labs © {new Date().getFullYear()}
          </span>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const statues = await sanityClient.fetch(statuesQuery);
  const faqs = await sanityClient.fetch(faqQuery);
  const works = await sanityClient.fetch(worksQuery);

  return {
    props: {
      statues,
      faqs,
      works,
    },
    revalidate: 1,
  };
}
