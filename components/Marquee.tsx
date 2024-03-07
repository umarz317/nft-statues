import { GeistSans } from "geist/font/sans";
import { Observer } from "gsap/dist/Observer";
import { useEffect, useRef } from "react";
import horizontalLoop from "@/lib/helpers/horizontalLoop";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
gsap.registerPlugin(Observer);

function MarqueeItem({ text }: { text: string }) {
  return (
    <div className="relative flex flex-row items-center py-4 lg:py-5 overflow-hidden">
      <span
        style={GeistSans.style}
        className="text-black text-lg lg:text-2xl font-semibold px-5 lg:px-6 uppercase whitespace-nowrap"
      >
        {text}
      </span>
      <span className="block w-4 lg:w-5">
        <svg
          width="100%"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.136719 19.9197L11.3935 0.960938L22.6502 19.9197H0.136719ZM12.3945 8.91968V13.9197H10.3945V8.91968H12.3945ZM10.3945 14.9197H12.3945V16.9197H10.3945V14.9197Z"
            fill="#0F0F0F"
          />
        </svg>
      </span>
    </div>
  );
}

function MarqueeRow({
  index,
  text1,
  text2,
}: {
  index: number;
  text1: string;
  text2: string;
}) {
  return (
    <div
      style={
        {
          // marginLeft: index % 2 === 1 ? "1px" : "0",
        }
      }
      className="marquee-inner m-0 flex flex-row items-center justify-center relative bg-[#ff3600]"
    >
      <span className="block p-0 m-0 w-[calc(100%+2.5px)] absolute left-0 top-0 z-50 bg-[#ff3600]">
        <svg
          width="100%"
          className="relative m-0 p-0 bg-transparent"
          viewBox="0 0 3944 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M127 0L156 0L163.5 11H134.5L127 0Z" fill="#0F0F0F" />
          <path d="M127 0L156 0L163.5 11H134.5L127 0Z" fill="#0F0F0F" />
          <path d="M98 0L127 0L134.5 11H105.5L98 0Z" fill="#0F0F0F" />
          <path d="M98 0L127 0L134.5 11H105.5L98 0Z" fill="#FF3600" />
          <path d="M185 0L214 0L221.5 11H192.5L185 0Z" fill="#0F0F0F" />
          <path d="M185 0L214 0L221.5 11H192.5L185 0Z" fill="#0F0F0F" />
          <path d="M156 0L185 0L192.5 11H163.5L156 0Z" fill="#0F0F0F" />
          <path d="M156 0L185 0L192.5 11H163.5L156 0Z" fill="#FF3600" />
          <path d="M69 0L98 0L105.5 11H76.5L69 0Z" fill="#0F0F0F" />
          <path d="M69 0L98 0L105.5 11H76.5L69 0Z" fill="#0F0F0F" />
          <path d="M11 0L40 0L47.5 11H18.5L11 0Z" fill="#0F0F0F" />
          <path d="M11 0L40 0L47.5 11H18.5L11 0Z" fill="#0F0F0F" />
          <path d="M40 0L69 0L76.5 11H47.5L40 0Z" fill="#0F0F0F" />
          <path d="M40 0L69 0L76.5 11H47.5L40 0Z" fill="#FF3600" />
          <path d="M0 0L11 0L18.5 11H0L0 0Z" fill="#0F0F0F" />
          <path d="M0 0L11 0L18.5 11H0L0 0Z" fill="#FF3600" />
          <path d="M301 0L330 0L337.5 11H308.5L301 0Z" fill="#0F0F0F" />
          <path d="M301 0L330 0L337.5 11H308.5L301 0Z" fill="#0F0F0F" />
          <path d="M272 0L301 0L308.5 11H279.5L272 0Z" fill="#0F0F0F" />
          <path d="M272 0L301 0L308.5 11H279.5L272 0Z" fill="#FF3600" />
          <path d="M359 0L388 0L395.5 11H366.5L359 0Z" fill="#0F0F0F" />
          <path d="M359 0L388 0L395.5 11H366.5L359 0Z" fill="#0F0F0F" />
          <path d="M330 0L359 0L366.5 11H337.5L330 0Z" fill="#0F0F0F" />
          <path d="M330 0L359 0L366.5 11H337.5L330 0Z" fill="#FF3600" />
          <path d="M243 0L272 0L279.5 11H250.5L243 0Z" fill="#0F0F0F" />
          <path d="M243 0L272 0L279.5 11H250.5L243 0Z" fill="#0F0F0F" />
          <path d="M214 0L243 0L250.5 11H221.5L214 0Z" fill="#0F0F0F" />
          <path d="M214 0L243 0L250.5 11H221.5L214 0Z" fill="#FF3600" />
          <path d="M475 0L504 0L511.5 11H482.5L475 0Z" fill="#0F0F0F" />
          <path d="M475 0L504 0L511.5 11H482.5L475 0Z" fill="#0F0F0F" />
          <path d="M446 0L475 0L482.5 11H453.5L446 0Z" fill="#0F0F0F" />
          <path d="M446 0L475 0L482.5 11H453.5L446 0Z" fill="#FF3600" />
          <path d="M533 0L562 0L569.5 11H540.5L533 0Z" fill="#0F0F0F" />
          <path d="M533 0L562 0L569.5 11H540.5L533 0Z" fill="#0F0F0F" />
          <path d="M504 0L533 0L540.5 11H511.5L504 0Z" fill="#0F0F0F" />
          <path d="M504 0L533 0L540.5 11H511.5L504 0Z" fill="#FF3600" />
          <path d="M417 0L446 0L453.5 11H424.5L417 0Z" fill="#0F0F0F" />
          <path d="M417 0L446 0L453.5 11H424.5L417 0Z" fill="#0F0F0F" />
          <path d="M388 0L417 0L424.5 11H395.5L388 0Z" fill="#0F0F0F" />
          <path d="M388 0L417 0L424.5 11H395.5L388 0Z" fill="#FF3600" />
          <path d="M591 0L620 0L627.5 11H598.5L591 0Z" fill="#0F0F0F" />
          <path d="M591 0L620 0L627.5 11H598.5L591 0Z" fill="#0F0F0F" />
          <path d="M562 0L591 0L598.5 11H569.5L562 0Z" fill="#0F0F0F" />
          <path d="M562 0L591 0L598.5 11H569.5L562 0Z" fill="#FF3600" />
          <path d="M707 0L736 0L743.5 11H714.5L707 0Z" fill="#0F0F0F" />
          <path d="M707 0L736 0L743.5 11H714.5L707 0Z" fill="#0F0F0F" />
          <path d="M678 0L707 0L714.5 11H685.5L678 0Z" fill="#0F0F0F" />
          <path d="M678 0L707 0L714.5 11H685.5L678 0Z" fill="#FF3600" />
          <path d="M765 0L794 0L801.5 11H772.5L765 0Z" fill="#0F0F0F" />
          <path d="M765 0L794 0L801.5 11H772.5L765 0Z" fill="#0F0F0F" />
          <path d="M736 0L765 0L772.5 11H743.5L736 0Z" fill="#0F0F0F" />
          <path d="M736 0L765 0L772.5 11H743.5L736 0Z" fill="#FF3600" />
          <path d="M649 0L678 0L685.5 11H656.5L649 0Z" fill="#0F0F0F" />
          <path d="M649 0L678 0L685.5 11H656.5L649 0Z" fill="#0F0F0F" />
          <path d="M620 0L649 0L656.5 11H627.5L620 0Z" fill="#0F0F0F" />
          <path d="M620 0L649 0L656.5 11H627.5L620 0Z" fill="#FF3600" />
          <path d="M881 0L910 0L917.5 11H888.5L881 0Z" fill="#0F0F0F" />
          <path d="M881 0L910 0L917.5 11H888.5L881 0Z" fill="#0F0F0F" />
          <path d="M852 0L881 0L888.5 11H859.5L852 0Z" fill="#0F0F0F" />
          <path d="M852 0L881 0L888.5 11H859.5L852 0Z" fill="#FF3600" />
          <path d="M939 0L968 0L975.5 11H946.5L939 0Z" fill="#0F0F0F" />
          <path d="M939 0L968 0L975.5 11H946.5L939 0Z" fill="#0F0F0F" />
          <path d="M910 0L939 0L946.5 11H917.5L910 0Z" fill="#0F0F0F" />
          <path d="M910 0L939 0L946.5 11H917.5L910 0Z" fill="#FF3600" />
          <path d="M823 0L852 0L859.5 11H830.5L823 0Z" fill="#0F0F0F" />
          <path d="M823 0L852 0L859.5 11H830.5L823 0Z" fill="#0F0F0F" />
          <path d="M794 0L823 0L830.5 11H801.5L794 0Z" fill="#0F0F0F" />
          <path d="M794 0L823 0L830.5 11H801.5L794 0Z" fill="#FF3600" />
          <path d="M997 0L1026 0L1033.5 11H1004.5L997 0Z" fill="#0F0F0F" />
          <path d="M997 0L1026 0L1033.5 11H1004.5L997 0Z" fill="#0F0F0F" />
          <path d="M968 0L997 0L1004.5 11H975.5L968 0Z" fill="#0F0F0F" />
          <path d="M968 0L997 0L1004.5 11H975.5L968 0Z" fill="#FF3600" />
          <path d="M1113 0L1142 0L1149.5 11H1120.5L1113 0Z" fill="#0F0F0F" />
          <path d="M1113 0L1142 0L1149.5 11H1120.5L1113 0Z" fill="#0F0F0F" />
          <path d="M1084 0L1113 0L1120.5 11H1091.5L1084 0Z" fill="#0F0F0F" />
          <path d="M1084 0L1113 0L1120.5 11H1091.5L1084 0Z" fill="#FF3600" />
          <path d="M1171 0L1200 0L1207.5 11H1178.5L1171 0Z" fill="#0F0F0F" />
          <path d="M1171 0L1200 0L1207.5 11H1178.5L1171 0Z" fill="#0F0F0F" />
          <path d="M1142 0L1171 0L1178.5 11H1149.5L1142 0Z" fill="#0F0F0F" />
          <path d="M1142 0L1171 0L1178.5 11H1149.5L1142 0Z" fill="#FF3600" />
          <path d="M1055 0L1084 0L1091.5 11H1062.5L1055 0Z" fill="#0F0F0F" />
          <path d="M1055 0L1084 0L1091.5 11H1062.5L1055 0Z" fill="#0F0F0F" />
          <path d="M1026 0L1055 0L1062.5 11H1033.5L1026 0Z" fill="#0F0F0F" />
          <path d="M1026 0L1055 0L1062.5 11H1033.5L1026 0Z" fill="#FF3600" />
          <path d="M1287 0L1316 0L1323.5 11H1294.5L1287 0Z" fill="#0F0F0F" />
          <path d="M1287 0L1316 0L1323.5 11H1294.5L1287 0Z" fill="#0F0F0F" />
          <path d="M1258 0L1287 0L1294.5 11H1265.5L1258 0Z" fill="#0F0F0F" />
          <path d="M1258 0L1287 0L1294.5 11H1265.5L1258 0Z" fill="#FF3600" />
          <path d="M1345 0L1374 0L1381.5 11H1352.5L1345 0Z" fill="#0F0F0F" />
          <path d="M1345 0L1374 0L1381.5 11H1352.5L1345 0Z" fill="#0F0F0F" />
          <path d="M1316 0L1345 0L1352.5 11H1323.5L1316 0Z" fill="#0F0F0F" />
          <path d="M1316 0L1345 0L1352.5 11H1323.5L1316 0Z" fill="#FF3600" />
          <path d="M1229 0L1258 0L1265.5 11H1236.5L1229 0Z" fill="#0F0F0F" />
          <path d="M1229 0L1258 0L1265.5 11H1236.5L1229 0Z" fill="#0F0F0F" />
          <path d="M1200 0L1229 0L1236.5 11H1207.5L1200 0Z" fill="#0F0F0F" />
          <path d="M1200 0L1229 0L1236.5 11H1207.5L1200 0Z" fill="#FF3600" />
          <path d="M1461 0L1490 0L1497.5 11H1468.5L1461 0Z" fill="#0F0F0F" />
          <path d="M1461 0L1490 0L1497.5 11H1468.5L1461 0Z" fill="#0F0F0F" />
          <path d="M1432 0L1461 0L1468.5 11H1439.5L1432 0Z" fill="#0F0F0F" />
          <path d="M1432 0L1461 0L1468.5 11H1439.5L1432 0Z" fill="#FF3600" />
          <path d="M1519 0L1548 0L1555.5 11H1526.5L1519 0Z" fill="#0F0F0F" />
          <path d="M1519 0L1548 0L1555.5 11H1526.5L1519 0Z" fill="#0F0F0F" />
          <path d="M1490 0L1519 0L1526.5 11H1497.5L1490 0Z" fill="#0F0F0F" />
          <path d="M1490 0L1519 0L1526.5 11H1497.5L1490 0Z" fill="#FF3600" />
          <path d="M1403 0L1432 0L1439.5 11H1410.5L1403 0Z" fill="#0F0F0F" />
          <path d="M1403 0L1432 0L1439.5 11H1410.5L1403 0Z" fill="#0F0F0F" />
          <path d="M1374 0L1403 0L1410.5 11H1381.5L1374 0Z" fill="#0F0F0F" />
          <path d="M1374 0L1403 0L1410.5 11H1381.5L1374 0Z" fill="#FF3600" />
          <path d="M1577 0L1606 0L1613.5 11H1584.5L1577 0Z" fill="#0F0F0F" />
          <path d="M1577 0L1606 0L1613.5 11H1584.5L1577 0Z" fill="#0F0F0F" />
          <path d="M1548 0L1577 0L1584.5 11H1555.5L1548 0Z" fill="#0F0F0F" />
          <path d="M1548 0L1577 0L1584.5 11H1555.5L1548 0Z" fill="#FF3600" />
          <path d="M1693 0L1722 0L1729.5 11H1700.5L1693 0Z" fill="#0F0F0F" />
          <path d="M1693 0L1722 0L1729.5 11H1700.5L1693 0Z" fill="#0F0F0F" />
          <path d="M1664 0L1693 0L1700.5 11H1671.5L1664 0Z" fill="#0F0F0F" />
          <path d="M1664 0L1693 0L1700.5 11H1671.5L1664 0Z" fill="#FF3600" />
          <path d="M1751 0L1780 0L1787.5 11H1758.5L1751 0Z" fill="#0F0F0F" />
          <path d="M1751 0L1780 0L1787.5 11H1758.5L1751 0Z" fill="#0F0F0F" />
          <path d="M1722 0L1751 0L1758.5 11H1729.5L1722 0Z" fill="#0F0F0F" />
          <path d="M1722 0L1751 0L1758.5 11H1729.5L1722 0Z" fill="#FF3600" />
          <path d="M1635 0L1664 0L1671.5 11H1642.5L1635 0Z" fill="#0F0F0F" />
          <path d="M1635 0L1664 0L1671.5 11H1642.5L1635 0Z" fill="#0F0F0F" />
          <path d="M1606 0L1635 0L1642.5 11H1613.5L1606 0Z" fill="#0F0F0F" />
          <path d="M1606 0L1635 0L1642.5 11H1613.5L1606 0Z" fill="#FF3600" />
          <path d="M1867 0L1896 0L1903.5 11H1874.5L1867 0Z" fill="#0F0F0F" />
          <path d="M1867 0L1896 0L1903.5 11H1874.5L1867 0Z" fill="#0F0F0F" />
          <path d="M1838 0L1867 0L1874.5 11H1845.5L1838 0Z" fill="#0F0F0F" />
          <path d="M1838 0L1867 0L1874.5 11H1845.5L1838 0Z" fill="#FF3600" />
          <path d="M1925 0L1954 0L1961.5 11H1932.5L1925 0Z" fill="#0F0F0F" />
          <path d="M1925 0L1954 0L1961.5 11H1932.5L1925 0Z" fill="#0F0F0F" />
          <path d="M1896 0L1925 0L1932.5 11H1903.5L1896 0Z" fill="#0F0F0F" />
          <path d="M1896 0L1925 0L1932.5 11H1903.5L1896 0Z" fill="#FF3600" />
          <path d="M1954 0L1983 0L1990.5 11H1961.5L1954 0Z" fill="#0F0F0F" />
          <path d="M1954 0L1983 0L1990.5 11H1961.5L1954 0Z" fill="#FF3600" />
          <path d="M1809 0L1838 0L1845.5 11H1816.5L1809 0Z" fill="#0F0F0F" />
          <path d="M1809 0L1838 0L1845.5 11H1816.5L1809 0Z" fill="#0F0F0F" />
          <path d="M1780 0L1809 0L1816.5 11H1787.5L1780 0Z" fill="#0F0F0F" />
          <path d="M1780 0L1809 0L1816.5 11H1787.5L1780 0Z" fill="#FF3600" />
          <path d="M2099 0L2128 0L2135.5 11H2106.5L2099 0Z" fill="#0F0F0F" />
          <path d="M2099 0L2128 0L2135.5 11H2106.5L2099 0Z" fill="#0F0F0F" />
          <path d="M2070 0L2099 0L2106.5 11H2077.5L2070 0Z" fill="#0F0F0F" />
          <path d="M2070 0L2099 0L2106.5 11H2077.5L2070 0Z" fill="#FF3600" />
          <path d="M2157 0L2186 0L2193.5 11H2164.5L2157 0Z" fill="#0F0F0F" />
          <path d="M2157 0L2186 0L2193.5 11H2164.5L2157 0Z" fill="#0F0F0F" />
          <path d="M2128 0L2157 0L2164.5 11H2135.5L2128 0Z" fill="#0F0F0F" />
          <path d="M2128 0L2157 0L2164.5 11H2135.5L2128 0Z" fill="#FF3600" />
          <path d="M2041 0L2070 0L2077.5 11H2048.5L2041 0Z" fill="#0F0F0F" />
          <path d="M2041 0L2070 0L2077.5 11H2048.5L2041 0Z" fill="#0F0F0F" />
          <path d="M1983 0L2012 0L2019.5 11H1990.5L1983 0Z" fill="#0F0F0F" />
          <path d="M1983 0L2012 0L2019.5 11H1990.5L1983 0Z" fill="#0F0F0F" />
          <path d="M2012 0L2041 0L2048.5 11H2019.5L2012 0Z" fill="#0F0F0F" />
          <path d="M2012 0L2041 0L2048.5 11H2019.5L2012 0Z" fill="#FF3600" />
          <path d="M2273 0L2302 0L2309.5 11H2280.5L2273 0Z" fill="#0F0F0F" />
          <path d="M2273 0L2302 0L2309.5 11H2280.5L2273 0Z" fill="#0F0F0F" />
          <path d="M2244 0L2273 0L2280.5 11H2251.5L2244 0Z" fill="#0F0F0F" />
          <path d="M2244 0L2273 0L2280.5 11H2251.5L2244 0Z" fill="#FF3600" />
          <path d="M2331 0L2360 0L2367.5 11H2338.5L2331 0Z" fill="#0F0F0F" />
          <path d="M2331 0L2360 0L2367.5 11H2338.5L2331 0Z" fill="#0F0F0F" />
          <path d="M2302 0L2331 0L2338.5 11H2309.5L2302 0Z" fill="#0F0F0F" />
          <path d="M2302 0L2331 0L2338.5 11H2309.5L2302 0Z" fill="#FF3600" />
          <path d="M2215 0L2244 0L2251.5 11H2222.5L2215 0Z" fill="#0F0F0F" />
          <path d="M2215 0L2244 0L2251.5 11H2222.5L2215 0Z" fill="#0F0F0F" />
          <path d="M2186 0L2215 0L2222.5 11H2193.5L2186 0Z" fill="#0F0F0F" />
          <path d="M2186 0L2215 0L2222.5 11H2193.5L2186 0Z" fill="#FF3600" />
          <path d="M2447 0L2476 0L2483.5 11H2454.5L2447 0Z" fill="#0F0F0F" />
          <path d="M2447 0L2476 0L2483.5 11H2454.5L2447 0Z" fill="#0F0F0F" />
          <path d="M2418 0L2447 0L2454.5 11H2425.5L2418 0Z" fill="#0F0F0F" />
          <path d="M2418 0L2447 0L2454.5 11H2425.5L2418 0Z" fill="#FF3600" />
          <path d="M2505 0L2534 0L2541.5 11H2512.5L2505 0Z" fill="#0F0F0F" />
          <path d="M2505 0L2534 0L2541.5 11H2512.5L2505 0Z" fill="#0F0F0F" />
          <path d="M2476 0L2505 0L2512.5 11H2483.5L2476 0Z" fill="#0F0F0F" />
          <path d="M2476 0L2505 0L2512.5 11H2483.5L2476 0Z" fill="#FF3600" />
          <path d="M2389 0L2418 0L2425.5 11H2396.5L2389 0Z" fill="#0F0F0F" />
          <path d="M2389 0L2418 0L2425.5 11H2396.5L2389 0Z" fill="#0F0F0F" />
          <path d="M2360 0L2389 0L2396.5 11H2367.5L2360 0Z" fill="#0F0F0F" />
          <path d="M2360 0L2389 0L2396.5 11H2367.5L2360 0Z" fill="#FF3600" />
          <path d="M2563 0L2592 0L2599.5 11H2570.5L2563 0Z" fill="#0F0F0F" />
          <path d="M2563 0L2592 0L2599.5 11H2570.5L2563 0Z" fill="#0F0F0F" />
          <path d="M2534 0L2563 0L2570.5 11H2541.5L2534 0Z" fill="#0F0F0F" />
          <path d="M2534 0L2563 0L2570.5 11H2541.5L2534 0Z" fill="#FF3600" />
          <path d="M2679 0L2708 0L2715.5 11H2686.5L2679 0Z" fill="#0F0F0F" />
          <path d="M2679 0L2708 0L2715.5 11H2686.5L2679 0Z" fill="#0F0F0F" />
          <path d="M2650 0L2679 0L2686.5 11H2657.5L2650 0Z" fill="#0F0F0F" />
          <path d="M2650 0L2679 0L2686.5 11H2657.5L2650 0Z" fill="#FF3600" />
          <path d="M2737 0L2766 0L2773.5 11H2744.5L2737 0Z" fill="#0F0F0F" />
          <path d="M2737 0L2766 0L2773.5 11H2744.5L2737 0Z" fill="#0F0F0F" />
          <path d="M2708 0L2737 0L2744.5 11H2715.5L2708 0Z" fill="#0F0F0F" />
          <path d="M2708 0L2737 0L2744.5 11H2715.5L2708 0Z" fill="#FF3600" />
          <path d="M2621 0L2650 0L2657.5 11H2628.5L2621 0Z" fill="#0F0F0F" />
          <path d="M2621 0L2650 0L2657.5 11H2628.5L2621 0Z" fill="#0F0F0F" />
          <path d="M2592 0L2621 0L2628.5 11H2599.5L2592 0Z" fill="#0F0F0F" />
          <path d="M2592 0L2621 0L2628.5 11H2599.5L2592 0Z" fill="#FF3600" />
          <path d="M2853 0L2882 0L2889.5 11H2860.5L2853 0Z" fill="#0F0F0F" />
          <path d="M2853 0L2882 0L2889.5 11H2860.5L2853 0Z" fill="#0F0F0F" />
          <path d="M2824 0L2853 0L2860.5 11H2831.5L2824 0Z" fill="#0F0F0F" />
          <path d="M2824 0L2853 0L2860.5 11H2831.5L2824 0Z" fill="#FF3600" />
          <path d="M2911 0L2940 0L2947.5 11H2918.5L2911 0Z" fill="#0F0F0F" />
          <path d="M2911 0L2940 0L2947.5 11H2918.5L2911 0Z" fill="#0F0F0F" />
          <path d="M2882 0L2911 0L2918.5 11H2889.5L2882 0Z" fill="#0F0F0F" />
          <path d="M2882 0L2911 0L2918.5 11H2889.5L2882 0Z" fill="#FF3600" />
          <path d="M2795 0L2824 0L2831.5 11H2802.5L2795 0Z" fill="#0F0F0F" />
          <path d="M2795 0L2824 0L2831.5 11H2802.5L2795 0Z" fill="#0F0F0F" />
          <path d="M2766 0L2795 0L2802.5 11H2773.5L2766 0Z" fill="#0F0F0F" />
          <path d="M2766 0L2795 0L2802.5 11H2773.5L2766 0Z" fill="#FF3600" />
          <path d="M2969 0L2998 0L3005.5 11H2976.5L2969 0Z" fill="#0F0F0F" />
          <path d="M2969 0L2998 0L3005.5 11H2976.5L2969 0Z" fill="#0F0F0F" />
          <path d="M2940 0L2969 0L2976.5 11H2947.5L2940 0Z" fill="#0F0F0F" />
          <path d="M2940 0L2969 0L2976.5 11H2947.5L2940 0Z" fill="#FF3600" />
          <path d="M3085 0L3114 0L3121.5 11H3092.5L3085 0Z" fill="#0F0F0F" />
          <path d="M3085 0L3114 0L3121.5 11H3092.5L3085 0Z" fill="#0F0F0F" />
          <path d="M3056 0L3085 0L3092.5 11H3063.5L3056 0Z" fill="#0F0F0F" />
          <path d="M3056 0L3085 0L3092.5 11H3063.5L3056 0Z" fill="#FF3600" />
          <path d="M3143 0L3172 0L3179.5 11H3150.5L3143 0Z" fill="#0F0F0F" />
          <path d="M3143 0L3172 0L3179.5 11H3150.5L3143 0Z" fill="#0F0F0F" />
          <path d="M3114 0L3143 0L3150.5 11H3121.5L3114 0Z" fill="#0F0F0F" />
          <path d="M3114 0L3143 0L3150.5 11H3121.5L3114 0Z" fill="#FF3600" />
          <path d="M3027 0L3056 0L3063.5 11H3034.5L3027 0Z" fill="#0F0F0F" />
          <path d="M3027 0L3056 0L3063.5 11H3034.5L3027 0Z" fill="#0F0F0F" />
          <path d="M2998 0L3027 0L3034.5 11H3005.5L2998 0Z" fill="#0F0F0F" />
          <path d="M2998 0L3027 0L3034.5 11H3005.5L2998 0Z" fill="#FF3600" />
          <path d="M3259 0L3288 0L3295.5 11H3266.5L3259 0Z" fill="#0F0F0F" />
          <path d="M3259 0L3288 0L3295.5 11H3266.5L3259 0Z" fill="#0F0F0F" />
          <path d="M3230 0L3259 0L3266.5 11H3237.5L3230 0Z" fill="#0F0F0F" />
          <path d="M3230 0L3259 0L3266.5 11H3237.5L3230 0Z" fill="#FF3600" />
          <path d="M3317 0L3346 0L3353.5 11H3324.5L3317 0Z" fill="#0F0F0F" />
          <path d="M3317 0L3346 0L3353.5 11H3324.5L3317 0Z" fill="#0F0F0F" />
          <path d="M3288 0L3317 0L3324.5 11H3295.5L3288 0Z" fill="#0F0F0F" />
          <path d="M3288 0L3317 0L3324.5 11H3295.5L3288 0Z" fill="#FF3600" />
          <path d="M3201 0L3230 0L3237.5 11H3208.5L3201 0Z" fill="#0F0F0F" />
          <path d="M3201 0L3230 0L3237.5 11H3208.5L3201 0Z" fill="#0F0F0F" />
          <path d="M3172 0L3201 0L3208.5 11H3179.5L3172 0Z" fill="#0F0F0F" />
          <path d="M3172 0L3201 0L3208.5 11H3179.5L3172 0Z" fill="#FF3600" />
          <path d="M3433 0L3462 0L3469.5 11H3440.5L3433 0Z" fill="#0F0F0F" />
          <path d="M3433 0L3462 0L3469.5 11H3440.5L3433 0Z" fill="#0F0F0F" />
          <path d="M3404 0L3433 0L3440.5 11H3411.5L3404 0Z" fill="#0F0F0F" />
          <path d="M3404 0L3433 0L3440.5 11H3411.5L3404 0Z" fill="#FF3600" />
          <path d="M3491 0L3520 0L3527.5 11H3498.5L3491 0Z" fill="#0F0F0F" />
          <path d="M3491 0L3520 0L3527.5 11H3498.5L3491 0Z" fill="#0F0F0F" />
          <path d="M3462 0L3491 0L3498.5 11H3469.5L3462 0Z" fill="#0F0F0F" />
          <path d="M3462 0L3491 0L3498.5 11H3469.5L3462 0Z" fill="#FF3600" />
          <path d="M3375 0L3404 0L3411.5 11H3382.5L3375 0Z" fill="#0F0F0F" />
          <path d="M3375 0L3404 0L3411.5 11H3382.5L3375 0Z" fill="#0F0F0F" />
          <path d="M3346 0L3375 0L3382.5 11H3353.5L3346 0Z" fill="#0F0F0F" />
          <path d="M3346 0L3375 0L3382.5 11H3353.5L3346 0Z" fill="#FF3600" />
          <path d="M3549 0L3578 0L3585.5 11H3556.5L3549 0Z" fill="#0F0F0F" />
          <path d="M3549 0L3578 0L3585.5 11H3556.5L3549 0Z" fill="#0F0F0F" />
          <path d="M3520 0L3549 0L3556.5 11H3527.5L3520 0Z" fill="#0F0F0F" />
          <path d="M3520 0L3549 0L3556.5 11H3527.5L3520 0Z" fill="#FF3600" />
          <path d="M3665 0L3694 0L3701.5 11H3672.5L3665 0Z" fill="#0F0F0F" />
          <path d="M3665 0L3694 0L3701.5 11H3672.5L3665 0Z" fill="#0F0F0F" />
          <path d="M3636 0L3665 0L3672.5 11H3643.5L3636 0Z" fill="#0F0F0F" />
          <path d="M3636 0L3665 0L3672.5 11H3643.5L3636 0Z" fill="#FF3600" />
          <path d="M3723 0L3752 0L3759.5 11H3730.5L3723 0Z" fill="#0F0F0F" />
          <path d="M3723 0L3752 0L3759.5 11H3730.5L3723 0Z" fill="#0F0F0F" />
          <path d="M3694 0L3723 0L3730.5 11H3701.5L3694 0Z" fill="#0F0F0F" />
          <path d="M3694 0L3723 0L3730.5 11H3701.5L3694 0Z" fill="#FF3600" />
          <path d="M3607 0L3636 0L3643.5 11H3614.5L3607 0Z" fill="#0F0F0F" />
          <path d="M3607 0L3636 0L3643.5 11H3614.5L3607 0Z" fill="#0F0F0F" />
          <path d="M3578 0L3607 0L3614.5 11H3585.5L3578 0Z" fill="#0F0F0F" />
          <path d="M3578 0L3607 0L3614.5 11H3585.5L3578 0Z" fill="#FF3600" />
          <path d="M3839 0L3868 0L3875.5 11H3846.5L3839 0Z" fill="#0F0F0F" />
          <path d="M3839 0L3868 0L3875.5 11H3846.5L3839 0Z" fill="#0F0F0F" />
          <path d="M3810 0L3839 0L3846.5 11H3817.5L3810 0Z" fill="#0F0F0F" />
          <path d="M3810 0L3839 0L3846.5 11H3817.5L3810 0Z" fill="#FF3600" />
          <path d="M3897 0L3926 0L3933.5 11H3904.5L3897 0Z" fill="#0F0F0F" />
          <path d="M3897 0L3926 0L3933.5 11H3904.5L3897 0Z" fill="#0F0F0F" />
          <path d="M3868 0L3897 0L3904.5 11H3875.5L3868 0Z" fill="#0F0F0F" />
          <path d="M3868 0L3897 0L3904.5 11H3875.5L3868 0Z" fill="#FF3600" />
          <path d="M3926 0L3944 0V11H3933.5L3926 0Z" fill="#0F0F0F" />
          <path d="M3926 0L3944 0V11H3933.5L3926 0Z" fill="#FF3600" />
          <path d="M3781 0L3810 0L3817.5 11H3788.5L3781 0Z" fill="#0F0F0F" />
          <path d="M3781 0L3810 0L3817.5 11H3788.5L3781 0Z" fill="#0F0F0F" />
          <path d="M3752 0L3781 0L3788.5 11H3759.5L3752 0Z" fill="#0F0F0F" />
          <path d="M3752 0L3781 0L3788.5 11H3759.5L3752 0Z" fill="#FF3600" />
        </svg>
      </span>

      <MarqueeItem text={text1} />
      <MarqueeItem text={text2} />
      <MarqueeItem text={text1} />
      <MarqueeItem text={text2} />
      <MarqueeItem text={text1} />
      <MarqueeItem text={text2} />
      <MarqueeItem text={text1} />
      <MarqueeItem text={text2} />
      <span className="block p-0 m-0 w-full absolute left-0 bottom-0 z-50">
        <svg
          width="100%"
          className="relative m-0 p-0 bg-transparent border-x-[2px] border-[#ff3600]"
          viewBox="0 0 3944 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M127 0L156 0L163.5 11H134.5L127 0Z" fill="#0F0F0F" />
          <path d="M127 0L156 0L163.5 11H134.5L127 0Z" fill="#0F0F0F" />
          <path d="M98 0L127 0L134.5 11H105.5L98 0Z" fill="#0F0F0F" />
          <path d="M98 0L127 0L134.5 11H105.5L98 0Z" fill="#FF3600" />
          <path d="M185 0L214 0L221.5 11H192.5L185 0Z" fill="#0F0F0F" />
          <path d="M185 0L214 0L221.5 11H192.5L185 0Z" fill="#0F0F0F" />
          <path d="M156 0L185 0L192.5 11H163.5L156 0Z" fill="#0F0F0F" />
          <path d="M156 0L185 0L192.5 11H163.5L156 0Z" fill="#FF3600" />
          <path d="M69 0L98 0L105.5 11H76.5L69 0Z" fill="#0F0F0F" />
          <path d="M69 0L98 0L105.5 11H76.5L69 0Z" fill="#0F0F0F" />
          <path d="M11 0L40 0L47.5 11H18.5L11 0Z" fill="#0F0F0F" />
          <path d="M11 0L40 0L47.5 11H18.5L11 0Z" fill="#0F0F0F" />
          <path d="M40 0L69 0L76.5 11H47.5L40 0Z" fill="#0F0F0F" />
          <path d="M40 0L69 0L76.5 11H47.5L40 0Z" fill="#FF3600" />
          <path d="M0 0L11 0L18.5 11H0L0 0Z" fill="#0F0F0F" />
          <path d="M0 0L11 0L18.5 11H0L0 0Z" fill="#FF3600" />
          <path d="M301 0L330 0L337.5 11H308.5L301 0Z" fill="#0F0F0F" />
          <path d="M301 0L330 0L337.5 11H308.5L301 0Z" fill="#0F0F0F" />
          <path d="M272 0L301 0L308.5 11H279.5L272 0Z" fill="#0F0F0F" />
          <path d="M272 0L301 0L308.5 11H279.5L272 0Z" fill="#FF3600" />
          <path d="M359 0L388 0L395.5 11H366.5L359 0Z" fill="#0F0F0F" />
          <path d="M359 0L388 0L395.5 11H366.5L359 0Z" fill="#0F0F0F" />
          <path d="M330 0L359 0L366.5 11H337.5L330 0Z" fill="#0F0F0F" />
          <path d="M330 0L359 0L366.5 11H337.5L330 0Z" fill="#FF3600" />
          <path d="M243 0L272 0L279.5 11H250.5L243 0Z" fill="#0F0F0F" />
          <path d="M243 0L272 0L279.5 11H250.5L243 0Z" fill="#0F0F0F" />
          <path d="M214 0L243 0L250.5 11H221.5L214 0Z" fill="#0F0F0F" />
          <path d="M214 0L243 0L250.5 11H221.5L214 0Z" fill="#FF3600" />
          <path d="M475 0L504 0L511.5 11H482.5L475 0Z" fill="#0F0F0F" />
          <path d="M475 0L504 0L511.5 11H482.5L475 0Z" fill="#0F0F0F" />
          <path d="M446 0L475 0L482.5 11H453.5L446 0Z" fill="#0F0F0F" />
          <path d="M446 0L475 0L482.5 11H453.5L446 0Z" fill="#FF3600" />
          <path d="M533 0L562 0L569.5 11H540.5L533 0Z" fill="#0F0F0F" />
          <path d="M533 0L562 0L569.5 11H540.5L533 0Z" fill="#0F0F0F" />
          <path d="M504 0L533 0L540.5 11H511.5L504 0Z" fill="#0F0F0F" />
          <path d="M504 0L533 0L540.5 11H511.5L504 0Z" fill="#FF3600" />
          <path d="M417 0L446 0L453.5 11H424.5L417 0Z" fill="#0F0F0F" />
          <path d="M417 0L446 0L453.5 11H424.5L417 0Z" fill="#0F0F0F" />
          <path d="M388 0L417 0L424.5 11H395.5L388 0Z" fill="#0F0F0F" />
          <path d="M388 0L417 0L424.5 11H395.5L388 0Z" fill="#FF3600" />
          <path d="M591 0L620 0L627.5 11H598.5L591 0Z" fill="#0F0F0F" />
          <path d="M591 0L620 0L627.5 11H598.5L591 0Z" fill="#0F0F0F" />
          <path d="M562 0L591 0L598.5 11H569.5L562 0Z" fill="#0F0F0F" />
          <path d="M562 0L591 0L598.5 11H569.5L562 0Z" fill="#FF3600" />
          <path d="M707 0L736 0L743.5 11H714.5L707 0Z" fill="#0F0F0F" />
          <path d="M707 0L736 0L743.5 11H714.5L707 0Z" fill="#0F0F0F" />
          <path d="M678 0L707 0L714.5 11H685.5L678 0Z" fill="#0F0F0F" />
          <path d="M678 0L707 0L714.5 11H685.5L678 0Z" fill="#FF3600" />
          <path d="M765 0L794 0L801.5 11H772.5L765 0Z" fill="#0F0F0F" />
          <path d="M765 0L794 0L801.5 11H772.5L765 0Z" fill="#0F0F0F" />
          <path d="M736 0L765 0L772.5 11H743.5L736 0Z" fill="#0F0F0F" />
          <path d="M736 0L765 0L772.5 11H743.5L736 0Z" fill="#FF3600" />
          <path d="M649 0L678 0L685.5 11H656.5L649 0Z" fill="#0F0F0F" />
          <path d="M649 0L678 0L685.5 11H656.5L649 0Z" fill="#0F0F0F" />
          <path d="M620 0L649 0L656.5 11H627.5L620 0Z" fill="#0F0F0F" />
          <path d="M620 0L649 0L656.5 11H627.5L620 0Z" fill="#FF3600" />
          <path d="M881 0L910 0L917.5 11H888.5L881 0Z" fill="#0F0F0F" />
          <path d="M881 0L910 0L917.5 11H888.5L881 0Z" fill="#0F0F0F" />
          <path d="M852 0L881 0L888.5 11H859.5L852 0Z" fill="#0F0F0F" />
          <path d="M852 0L881 0L888.5 11H859.5L852 0Z" fill="#FF3600" />
          <path d="M939 0L968 0L975.5 11H946.5L939 0Z" fill="#0F0F0F" />
          <path d="M939 0L968 0L975.5 11H946.5L939 0Z" fill="#0F0F0F" />
          <path d="M910 0L939 0L946.5 11H917.5L910 0Z" fill="#0F0F0F" />
          <path d="M910 0L939 0L946.5 11H917.5L910 0Z" fill="#FF3600" />
          <path d="M823 0L852 0L859.5 11H830.5L823 0Z" fill="#0F0F0F" />
          <path d="M823 0L852 0L859.5 11H830.5L823 0Z" fill="#0F0F0F" />
          <path d="M794 0L823 0L830.5 11H801.5L794 0Z" fill="#0F0F0F" />
          <path d="M794 0L823 0L830.5 11H801.5L794 0Z" fill="#FF3600" />
          <path d="M997 0L1026 0L1033.5 11H1004.5L997 0Z" fill="#0F0F0F" />
          <path d="M997 0L1026 0L1033.5 11H1004.5L997 0Z" fill="#0F0F0F" />
          <path d="M968 0L997 0L1004.5 11H975.5L968 0Z" fill="#0F0F0F" />
          <path d="M968 0L997 0L1004.5 11H975.5L968 0Z" fill="#FF3600" />
          <path d="M1113 0L1142 0L1149.5 11H1120.5L1113 0Z" fill="#0F0F0F" />
          <path d="M1113 0L1142 0L1149.5 11H1120.5L1113 0Z" fill="#0F0F0F" />
          <path d="M1084 0L1113 0L1120.5 11H1091.5L1084 0Z" fill="#0F0F0F" />
          <path d="M1084 0L1113 0L1120.5 11H1091.5L1084 0Z" fill="#FF3600" />
          <path d="M1171 0L1200 0L1207.5 11H1178.5L1171 0Z" fill="#0F0F0F" />
          <path d="M1171 0L1200 0L1207.5 11H1178.5L1171 0Z" fill="#0F0F0F" />
          <path d="M1142 0L1171 0L1178.5 11H1149.5L1142 0Z" fill="#0F0F0F" />
          <path d="M1142 0L1171 0L1178.5 11H1149.5L1142 0Z" fill="#FF3600" />
          <path d="M1055 0L1084 0L1091.5 11H1062.5L1055 0Z" fill="#0F0F0F" />
          <path d="M1055 0L1084 0L1091.5 11H1062.5L1055 0Z" fill="#0F0F0F" />
          <path d="M1026 0L1055 0L1062.5 11H1033.5L1026 0Z" fill="#0F0F0F" />
          <path d="M1026 0L1055 0L1062.5 11H1033.5L1026 0Z" fill="#FF3600" />
          <path d="M1287 0L1316 0L1323.5 11H1294.5L1287 0Z" fill="#0F0F0F" />
          <path d="M1287 0L1316 0L1323.5 11H1294.5L1287 0Z" fill="#0F0F0F" />
          <path d="M1258 0L1287 0L1294.5 11H1265.5L1258 0Z" fill="#0F0F0F" />
          <path d="M1258 0L1287 0L1294.5 11H1265.5L1258 0Z" fill="#FF3600" />
          <path d="M1345 0L1374 0L1381.5 11H1352.5L1345 0Z" fill="#0F0F0F" />
          <path d="M1345 0L1374 0L1381.5 11H1352.5L1345 0Z" fill="#0F0F0F" />
          <path d="M1316 0L1345 0L1352.5 11H1323.5L1316 0Z" fill="#0F0F0F" />
          <path d="M1316 0L1345 0L1352.5 11H1323.5L1316 0Z" fill="#FF3600" />
          <path d="M1229 0L1258 0L1265.5 11H1236.5L1229 0Z" fill="#0F0F0F" />
          <path d="M1229 0L1258 0L1265.5 11H1236.5L1229 0Z" fill="#0F0F0F" />
          <path d="M1200 0L1229 0L1236.5 11H1207.5L1200 0Z" fill="#0F0F0F" />
          <path d="M1200 0L1229 0L1236.5 11H1207.5L1200 0Z" fill="#FF3600" />
          <path d="M1461 0L1490 0L1497.5 11H1468.5L1461 0Z" fill="#0F0F0F" />
          <path d="M1461 0L1490 0L1497.5 11H1468.5L1461 0Z" fill="#0F0F0F" />
          <path d="M1432 0L1461 0L1468.5 11H1439.5L1432 0Z" fill="#0F0F0F" />
          <path d="M1432 0L1461 0L1468.5 11H1439.5L1432 0Z" fill="#FF3600" />
          <path d="M1519 0L1548 0L1555.5 11H1526.5L1519 0Z" fill="#0F0F0F" />
          <path d="M1519 0L1548 0L1555.5 11H1526.5L1519 0Z" fill="#0F0F0F" />
          <path d="M1490 0L1519 0L1526.5 11H1497.5L1490 0Z" fill="#0F0F0F" />
          <path d="M1490 0L1519 0L1526.5 11H1497.5L1490 0Z" fill="#FF3600" />
          <path d="M1403 0L1432 0L1439.5 11H1410.5L1403 0Z" fill="#0F0F0F" />
          <path d="M1403 0L1432 0L1439.5 11H1410.5L1403 0Z" fill="#0F0F0F" />
          <path d="M1374 0L1403 0L1410.5 11H1381.5L1374 0Z" fill="#0F0F0F" />
          <path d="M1374 0L1403 0L1410.5 11H1381.5L1374 0Z" fill="#FF3600" />
          <path d="M1577 0L1606 0L1613.5 11H1584.5L1577 0Z" fill="#0F0F0F" />
          <path d="M1577 0L1606 0L1613.5 11H1584.5L1577 0Z" fill="#0F0F0F" />
          <path d="M1548 0L1577 0L1584.5 11H1555.5L1548 0Z" fill="#0F0F0F" />
          <path d="M1548 0L1577 0L1584.5 11H1555.5L1548 0Z" fill="#FF3600" />
          <path d="M1693 0L1722 0L1729.5 11H1700.5L1693 0Z" fill="#0F0F0F" />
          <path d="M1693 0L1722 0L1729.5 11H1700.5L1693 0Z" fill="#0F0F0F" />
          <path d="M1664 0L1693 0L1700.5 11H1671.5L1664 0Z" fill="#0F0F0F" />
          <path d="M1664 0L1693 0L1700.5 11H1671.5L1664 0Z" fill="#FF3600" />
          <path d="M1751 0L1780 0L1787.5 11H1758.5L1751 0Z" fill="#0F0F0F" />
          <path d="M1751 0L1780 0L1787.5 11H1758.5L1751 0Z" fill="#0F0F0F" />
          <path d="M1722 0L1751 0L1758.5 11H1729.5L1722 0Z" fill="#0F0F0F" />
          <path d="M1722 0L1751 0L1758.5 11H1729.5L1722 0Z" fill="#FF3600" />
          <path d="M1635 0L1664 0L1671.5 11H1642.5L1635 0Z" fill="#0F0F0F" />
          <path d="M1635 0L1664 0L1671.5 11H1642.5L1635 0Z" fill="#0F0F0F" />
          <path d="M1606 0L1635 0L1642.5 11H1613.5L1606 0Z" fill="#0F0F0F" />
          <path d="M1606 0L1635 0L1642.5 11H1613.5L1606 0Z" fill="#FF3600" />
          <path d="M1867 0L1896 0L1903.5 11H1874.5L1867 0Z" fill="#0F0F0F" />
          <path d="M1867 0L1896 0L1903.5 11H1874.5L1867 0Z" fill="#0F0F0F" />
          <path d="M1838 0L1867 0L1874.5 11H1845.5L1838 0Z" fill="#0F0F0F" />
          <path d="M1838 0L1867 0L1874.5 11H1845.5L1838 0Z" fill="#FF3600" />
          <path d="M1925 0L1954 0L1961.5 11H1932.5L1925 0Z" fill="#0F0F0F" />
          <path d="M1925 0L1954 0L1961.5 11H1932.5L1925 0Z" fill="#0F0F0F" />
          <path d="M1896 0L1925 0L1932.5 11H1903.5L1896 0Z" fill="#0F0F0F" />
          <path d="M1896 0L1925 0L1932.5 11H1903.5L1896 0Z" fill="#FF3600" />
          <path d="M1954 0L1983 0L1990.5 11H1961.5L1954 0Z" fill="#0F0F0F" />
          <path d="M1954 0L1983 0L1990.5 11H1961.5L1954 0Z" fill="#FF3600" />
          <path d="M1809 0L1838 0L1845.5 11H1816.5L1809 0Z" fill="#0F0F0F" />
          <path d="M1809 0L1838 0L1845.5 11H1816.5L1809 0Z" fill="#0F0F0F" />
          <path d="M1780 0L1809 0L1816.5 11H1787.5L1780 0Z" fill="#0F0F0F" />
          <path d="M1780 0L1809 0L1816.5 11H1787.5L1780 0Z" fill="#FF3600" />
          <path d="M2099 0L2128 0L2135.5 11H2106.5L2099 0Z" fill="#0F0F0F" />
          <path d="M2099 0L2128 0L2135.5 11H2106.5L2099 0Z" fill="#0F0F0F" />
          <path d="M2070 0L2099 0L2106.5 11H2077.5L2070 0Z" fill="#0F0F0F" />
          <path d="M2070 0L2099 0L2106.5 11H2077.5L2070 0Z" fill="#FF3600" />
          <path d="M2157 0L2186 0L2193.5 11H2164.5L2157 0Z" fill="#0F0F0F" />
          <path d="M2157 0L2186 0L2193.5 11H2164.5L2157 0Z" fill="#0F0F0F" />
          <path d="M2128 0L2157 0L2164.5 11H2135.5L2128 0Z" fill="#0F0F0F" />
          <path d="M2128 0L2157 0L2164.5 11H2135.5L2128 0Z" fill="#FF3600" />
          <path d="M2041 0L2070 0L2077.5 11H2048.5L2041 0Z" fill="#0F0F0F" />
          <path d="M2041 0L2070 0L2077.5 11H2048.5L2041 0Z" fill="#0F0F0F" />
          <path d="M1983 0L2012 0L2019.5 11H1990.5L1983 0Z" fill="#0F0F0F" />
          <path d="M1983 0L2012 0L2019.5 11H1990.5L1983 0Z" fill="#0F0F0F" />
          <path d="M2012 0L2041 0L2048.5 11H2019.5L2012 0Z" fill="#0F0F0F" />
          <path d="M2012 0L2041 0L2048.5 11H2019.5L2012 0Z" fill="#FF3600" />
          <path d="M2273 0L2302 0L2309.5 11H2280.5L2273 0Z" fill="#0F0F0F" />
          <path d="M2273 0L2302 0L2309.5 11H2280.5L2273 0Z" fill="#0F0F0F" />
          <path d="M2244 0L2273 0L2280.5 11H2251.5L2244 0Z" fill="#0F0F0F" />
          <path d="M2244 0L2273 0L2280.5 11H2251.5L2244 0Z" fill="#FF3600" />
          <path d="M2331 0L2360 0L2367.5 11H2338.5L2331 0Z" fill="#0F0F0F" />
          <path d="M2331 0L2360 0L2367.5 11H2338.5L2331 0Z" fill="#0F0F0F" />
          <path d="M2302 0L2331 0L2338.5 11H2309.5L2302 0Z" fill="#0F0F0F" />
          <path d="M2302 0L2331 0L2338.5 11H2309.5L2302 0Z" fill="#FF3600" />
          <path d="M2215 0L2244 0L2251.5 11H2222.5L2215 0Z" fill="#0F0F0F" />
          <path d="M2215 0L2244 0L2251.5 11H2222.5L2215 0Z" fill="#0F0F0F" />
          <path d="M2186 0L2215 0L2222.5 11H2193.5L2186 0Z" fill="#0F0F0F" />
          <path d="M2186 0L2215 0L2222.5 11H2193.5L2186 0Z" fill="#FF3600" />
          <path d="M2447 0L2476 0L2483.5 11H2454.5L2447 0Z" fill="#0F0F0F" />
          <path d="M2447 0L2476 0L2483.5 11H2454.5L2447 0Z" fill="#0F0F0F" />
          <path d="M2418 0L2447 0L2454.5 11H2425.5L2418 0Z" fill="#0F0F0F" />
          <path d="M2418 0L2447 0L2454.5 11H2425.5L2418 0Z" fill="#FF3600" />
          <path d="M2505 0L2534 0L2541.5 11H2512.5L2505 0Z" fill="#0F0F0F" />
          <path d="M2505 0L2534 0L2541.5 11H2512.5L2505 0Z" fill="#0F0F0F" />
          <path d="M2476 0L2505 0L2512.5 11H2483.5L2476 0Z" fill="#0F0F0F" />
          <path d="M2476 0L2505 0L2512.5 11H2483.5L2476 0Z" fill="#FF3600" />
          <path d="M2389 0L2418 0L2425.5 11H2396.5L2389 0Z" fill="#0F0F0F" />
          <path d="M2389 0L2418 0L2425.5 11H2396.5L2389 0Z" fill="#0F0F0F" />
          <path d="M2360 0L2389 0L2396.5 11H2367.5L2360 0Z" fill="#0F0F0F" />
          <path d="M2360 0L2389 0L2396.5 11H2367.5L2360 0Z" fill="#FF3600" />
          <path d="M2563 0L2592 0L2599.5 11H2570.5L2563 0Z" fill="#0F0F0F" />
          <path d="M2563 0L2592 0L2599.5 11H2570.5L2563 0Z" fill="#0F0F0F" />
          <path d="M2534 0L2563 0L2570.5 11H2541.5L2534 0Z" fill="#0F0F0F" />
          <path d="M2534 0L2563 0L2570.5 11H2541.5L2534 0Z" fill="#FF3600" />
          <path d="M2679 0L2708 0L2715.5 11H2686.5L2679 0Z" fill="#0F0F0F" />
          <path d="M2679 0L2708 0L2715.5 11H2686.5L2679 0Z" fill="#0F0F0F" />
          <path d="M2650 0L2679 0L2686.5 11H2657.5L2650 0Z" fill="#0F0F0F" />
          <path d="M2650 0L2679 0L2686.5 11H2657.5L2650 0Z" fill="#FF3600" />
          <path d="M2737 0L2766 0L2773.5 11H2744.5L2737 0Z" fill="#0F0F0F" />
          <path d="M2737 0L2766 0L2773.5 11H2744.5L2737 0Z" fill="#0F0F0F" />
          <path d="M2708 0L2737 0L2744.5 11H2715.5L2708 0Z" fill="#0F0F0F" />
          <path d="M2708 0L2737 0L2744.5 11H2715.5L2708 0Z" fill="#FF3600" />
          <path d="M2621 0L2650 0L2657.5 11H2628.5L2621 0Z" fill="#0F0F0F" />
          <path d="M2621 0L2650 0L2657.5 11H2628.5L2621 0Z" fill="#0F0F0F" />
          <path d="M2592 0L2621 0L2628.5 11H2599.5L2592 0Z" fill="#0F0F0F" />
          <path d="M2592 0L2621 0L2628.5 11H2599.5L2592 0Z" fill="#FF3600" />
          <path d="M2853 0L2882 0L2889.5 11H2860.5L2853 0Z" fill="#0F0F0F" />
          <path d="M2853 0L2882 0L2889.5 11H2860.5L2853 0Z" fill="#0F0F0F" />
          <path d="M2824 0L2853 0L2860.5 11H2831.5L2824 0Z" fill="#0F0F0F" />
          <path d="M2824 0L2853 0L2860.5 11H2831.5L2824 0Z" fill="#FF3600" />
          <path d="M2911 0L2940 0L2947.5 11H2918.5L2911 0Z" fill="#0F0F0F" />
          <path d="M2911 0L2940 0L2947.5 11H2918.5L2911 0Z" fill="#0F0F0F" />
          <path d="M2882 0L2911 0L2918.5 11H2889.5L2882 0Z" fill="#0F0F0F" />
          <path d="M2882 0L2911 0L2918.5 11H2889.5L2882 0Z" fill="#FF3600" />
          <path d="M2795 0L2824 0L2831.5 11H2802.5L2795 0Z" fill="#0F0F0F" />
          <path d="M2795 0L2824 0L2831.5 11H2802.5L2795 0Z" fill="#0F0F0F" />
          <path d="M2766 0L2795 0L2802.5 11H2773.5L2766 0Z" fill="#0F0F0F" />
          <path d="M2766 0L2795 0L2802.5 11H2773.5L2766 0Z" fill="#FF3600" />
          <path d="M2969 0L2998 0L3005.5 11H2976.5L2969 0Z" fill="#0F0F0F" />
          <path d="M2969 0L2998 0L3005.5 11H2976.5L2969 0Z" fill="#0F0F0F" />
          <path d="M2940 0L2969 0L2976.5 11H2947.5L2940 0Z" fill="#0F0F0F" />
          <path d="M2940 0L2969 0L2976.5 11H2947.5L2940 0Z" fill="#FF3600" />
          <path d="M3085 0L3114 0L3121.5 11H3092.5L3085 0Z" fill="#0F0F0F" />
          <path d="M3085 0L3114 0L3121.5 11H3092.5L3085 0Z" fill="#0F0F0F" />
          <path d="M3056 0L3085 0L3092.5 11H3063.5L3056 0Z" fill="#0F0F0F" />
          <path d="M3056 0L3085 0L3092.5 11H3063.5L3056 0Z" fill="#FF3600" />
          <path d="M3143 0L3172 0L3179.5 11H3150.5L3143 0Z" fill="#0F0F0F" />
          <path d="M3143 0L3172 0L3179.5 11H3150.5L3143 0Z" fill="#0F0F0F" />
          <path d="M3114 0L3143 0L3150.5 11H3121.5L3114 0Z" fill="#0F0F0F" />
          <path d="M3114 0L3143 0L3150.5 11H3121.5L3114 0Z" fill="#FF3600" />
          <path d="M3027 0L3056 0L3063.5 11H3034.5L3027 0Z" fill="#0F0F0F" />
          <path d="M3027 0L3056 0L3063.5 11H3034.5L3027 0Z" fill="#0F0F0F" />
          <path d="M2998 0L3027 0L3034.5 11H3005.5L2998 0Z" fill="#0F0F0F" />
          <path d="M2998 0L3027 0L3034.5 11H3005.5L2998 0Z" fill="#FF3600" />
          <path d="M3259 0L3288 0L3295.5 11H3266.5L3259 0Z" fill="#0F0F0F" />
          <path d="M3259 0L3288 0L3295.5 11H3266.5L3259 0Z" fill="#0F0F0F" />
          <path d="M3230 0L3259 0L3266.5 11H3237.5L3230 0Z" fill="#0F0F0F" />
          <path d="M3230 0L3259 0L3266.5 11H3237.5L3230 0Z" fill="#FF3600" />
          <path d="M3317 0L3346 0L3353.5 11H3324.5L3317 0Z" fill="#0F0F0F" />
          <path d="M3317 0L3346 0L3353.5 11H3324.5L3317 0Z" fill="#0F0F0F" />
          <path d="M3288 0L3317 0L3324.5 11H3295.5L3288 0Z" fill="#0F0F0F" />
          <path d="M3288 0L3317 0L3324.5 11H3295.5L3288 0Z" fill="#FF3600" />
          <path d="M3201 0L3230 0L3237.5 11H3208.5L3201 0Z" fill="#0F0F0F" />
          <path d="M3201 0L3230 0L3237.5 11H3208.5L3201 0Z" fill="#0F0F0F" />
          <path d="M3172 0L3201 0L3208.5 11H3179.5L3172 0Z" fill="#0F0F0F" />
          <path d="M3172 0L3201 0L3208.5 11H3179.5L3172 0Z" fill="#FF3600" />
          <path d="M3433 0L3462 0L3469.5 11H3440.5L3433 0Z" fill="#0F0F0F" />
          <path d="M3433 0L3462 0L3469.5 11H3440.5L3433 0Z" fill="#0F0F0F" />
          <path d="M3404 0L3433 0L3440.5 11H3411.5L3404 0Z" fill="#0F0F0F" />
          <path d="M3404 0L3433 0L3440.5 11H3411.5L3404 0Z" fill="#FF3600" />
          <path d="M3491 0L3520 0L3527.5 11H3498.5L3491 0Z" fill="#0F0F0F" />
          <path d="M3491 0L3520 0L3527.5 11H3498.5L3491 0Z" fill="#0F0F0F" />
          <path d="M3462 0L3491 0L3498.5 11H3469.5L3462 0Z" fill="#0F0F0F" />
          <path d="M3462 0L3491 0L3498.5 11H3469.5L3462 0Z" fill="#FF3600" />
          <path d="M3375 0L3404 0L3411.5 11H3382.5L3375 0Z" fill="#0F0F0F" />
          <path d="M3375 0L3404 0L3411.5 11H3382.5L3375 0Z" fill="#0F0F0F" />
          <path d="M3346 0L3375 0L3382.5 11H3353.5L3346 0Z" fill="#0F0F0F" />
          <path d="M3346 0L3375 0L3382.5 11H3353.5L3346 0Z" fill="#FF3600" />
          <path d="M3549 0L3578 0L3585.5 11H3556.5L3549 0Z" fill="#0F0F0F" />
          <path d="M3549 0L3578 0L3585.5 11H3556.5L3549 0Z" fill="#0F0F0F" />
          <path d="M3520 0L3549 0L3556.5 11H3527.5L3520 0Z" fill="#0F0F0F" />
          <path d="M3520 0L3549 0L3556.5 11H3527.5L3520 0Z" fill="#FF3600" />
          <path d="M3665 0L3694 0L3701.5 11H3672.5L3665 0Z" fill="#0F0F0F" />
          <path d="M3665 0L3694 0L3701.5 11H3672.5L3665 0Z" fill="#0F0F0F" />
          <path d="M3636 0L3665 0L3672.5 11H3643.5L3636 0Z" fill="#0F0F0F" />
          <path d="M3636 0L3665 0L3672.5 11H3643.5L3636 0Z" fill="#FF3600" />
          <path d="M3723 0L3752 0L3759.5 11H3730.5L3723 0Z" fill="#0F0F0F" />
          <path d="M3723 0L3752 0L3759.5 11H3730.5L3723 0Z" fill="#0F0F0F" />
          <path d="M3694 0L3723 0L3730.5 11H3701.5L3694 0Z" fill="#0F0F0F" />
          <path d="M3694 0L3723 0L3730.5 11H3701.5L3694 0Z" fill="#FF3600" />
          <path d="M3607 0L3636 0L3643.5 11H3614.5L3607 0Z" fill="#0F0F0F" />
          <path d="M3607 0L3636 0L3643.5 11H3614.5L3607 0Z" fill="#0F0F0F" />
          <path d="M3578 0L3607 0L3614.5 11H3585.5L3578 0Z" fill="#0F0F0F" />
          <path d="M3578 0L3607 0L3614.5 11H3585.5L3578 0Z" fill="#FF3600" />
          <path d="M3839 0L3868 0L3875.5 11H3846.5L3839 0Z" fill="#0F0F0F" />
          <path d="M3839 0L3868 0L3875.5 11H3846.5L3839 0Z" fill="#0F0F0F" />
          <path d="M3810 0L3839 0L3846.5 11H3817.5L3810 0Z" fill="#0F0F0F" />
          <path d="M3810 0L3839 0L3846.5 11H3817.5L3810 0Z" fill="#FF3600" />
          <path d="M3897 0L3926 0L3933.5 11H3904.5L3897 0Z" fill="#0F0F0F" />
          <path d="M3897 0L3926 0L3933.5 11H3904.5L3897 0Z" fill="#0F0F0F" />
          <path d="M3868 0L3897 0L3904.5 11H3875.5L3868 0Z" fill="#0F0F0F" />
          <path d="M3868 0L3897 0L3904.5 11H3875.5L3868 0Z" fill="#FF3600" />
          <path d="M3926 0L3944 0V11H3933.5L3926 0Z" fill="#0F0F0F" />
          <path d="M3926 0L3944 0V11H3933.5L3926 0Z" fill="#FF3600" />
          <path d="M3781 0L3810 0L3817.5 11H3788.5L3781 0Z" fill="#0F0F0F" />
          <path d="M3781 0L3810 0L3817.5 11H3788.5L3781 0Z" fill="#0F0F0F" />
          <path d="M3752 0L3781 0L3788.5 11H3759.5L3752 0Z" fill="#0F0F0F" />
          <path d="M3752 0L3781 0L3788.5 11H3759.5L3752 0Z" fill="#FF3600" />
        </svg>
      </span>
    </div>
  );
}

export default function Marquee({
  identifier,
  className,
  text1 = "This is a marquee",
  text2 = "Just scrolling",
}: {
  identifier: string;
  className?: string;
  text1?: string;
  text2?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const speed = 2.5;
    const loop = horizontalLoop(`.${identifier} .marquee-inner`, {
      repeat: -1,
      speed: 1.5,
      paddingRight: 0,
    });

    let tl: any;

    Observer?.create({
      target: window,
      type: "wheel",
      onChangeY: (self) => {
        tl && tl.kill();
        const factor = self.deltaY > 0 ? -1 : 1;
        tl = gsap
          .timeline()
          .to(loop, { timeScale: speed * factor, duration: 0.25 })
          .to(loop, { timeScale: 1 * factor, duration: 1 });
      },
    });

    return () => {
      tl?.kill();
    };
  }, []);

  return (
    <div
      className={cn(
        "overflow-x-hidden w-full flex items-center rotate-[2.5deg]",
        identifier,
        className
      )}
    >
      <div
        ref={containerRef}
        style={{
          boxShadow: "0 0 80px 0 rgba(255,54, 0, 0.3)",
        }}
        className="flex flex-row items-center w-[100%] relative"
      >
        <div className="absolute w-full bg-[#ff3600] h-[90%]"></div>
        <MarqueeRow index={0} text1={text1} text2={text2} />
        <MarqueeRow index={1} text1={text1} text2={text2} />
      </div>
    </div>
  );
}
