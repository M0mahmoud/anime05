import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">&#x40;2023 Anime05</p>
      <Link href={"/"}>
        <Image
          src="./logo.svg"
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <Image
            src="./tiktok.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
