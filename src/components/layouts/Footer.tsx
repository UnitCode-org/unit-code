// import unitLogoGray from "@public/images/unit-logo-gray.svg";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer className="grid w-full max-w-screen-2xl grid-cols-2 justify-between px-8 py-8 sm:px-16 sm:py-32">
      <div className="flex flex-col gap-y-4 sm:gap-y-7">
        <h2 className="text-sm font-medium sm:text-xl">Unit Code</h2>
        <Separator className="w-20 bg-[#3E3E3E] sm:w-80" />
        <div className="grid grid-cols-3 items-center gap-2 sm:flex">
          <Link
            href="https://www.instagram.com/unit.network"
            className="rounded-full border border-[#565656] p-3 sm:p-2"
          >
            <FaInstagram className="mx-auto size-5 sm:size-3" />
          </Link>
          <Link
            href="https://t.me/unitfoundation"
            className="rounded-full border border-[#565656] p-3 sm:p-2"
          >
            <FaTelegram className="mx-auto size-5 sm:size-3" />
          </Link>
          <Link
            href="https://www.facebook.com/theunitnetwork"
            className="rounded-full border border-[#565656] p-3 sm:p-2"
          >
            <FaFacebook className="mx-auto size-5 sm:size-3" />
          </Link>
          <Link
            href="https://twitter.com/theunitnetwork"
            className="rounded-full border border-[#565656] p-3 sm:p-2"
          >
            <FaXTwitter className="mx-auto size-5 sm:size-3" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/theunitnetwork/"
            className="rounded-full border border-[#565656] p-3 sm:p-2"
          >
            <FaLinkedin className="mx-auto size-5 sm:size-3" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-x-20 gap-y-6 text-right font-poppins text-lg text-[#C0C0C0] sm:flex-row">
        <ul className="flex flex-col gap-y-1">
          <li>Home</li>
          <li>About</li>
          <li>Media Links</li>
          <li>Technology</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li>Unit Network</li>
          <li>Unit Events</li>
          <li>Unit Cities</li>
          <li>Unit Conference</li>
          <li>Unit Masters</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
