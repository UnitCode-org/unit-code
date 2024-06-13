"use client";
import Link from "next/link";
import { forwardRef, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const ContactUs = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, _ref) => {
    const contactUsRef = useRef<HTMLDivElement>(null);

    const { setContactUsRef } = useIndexRefStore();

    useEffect(() => {
      setContactUsRef(contactUsRef);
    }, []);

    return (
      <section
        ref={contactUsRef}
        className={cn("relative w-full py-28 sm:py-48", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-y-6 text-center">
          <h2 className="max-w-3xl text-2xl font-semibold sm:text-5xl">
            Want to get in touch?
          </h2>
          <div className="z-50 flex max-w-screen-lg flex-col text-sm text-[#9596A2] sm:text-lg">
            <p>Send a message, and we’ll get back to you</p>
          </div>
          <div className="mt-6 grid grid-cols-3 items-center gap-2 sm:flex">
            <Link
              href="https://www.instagram.com/unit.network"
              className="rounded-full border border-[#565656] p-4"
            >
              <FaInstagram className="size-8 sm:size-6" />
            </Link>
            <Link
              href="https://t.me/unitfoundation"
              className="rounded-full border border-[#565656] p-4"
            >
              <FaTelegram className="size-8 sm:size-6" />
            </Link>
            <Link
              href="https://www.facebook.com/theunitnetwork"
              className="rounded-full border border-[#565656] p-4"
            >
              <FaFacebook className="size-8 sm:size-6" />
            </Link>
            <Link
              href="https://twitter.com/theunitnetwork"
              className="rounded-full border border-[#565656] p-4"
            >
              <FaXTwitter className="size-8 sm:size-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/theunitnetwork/"
              className="rounded-full border border-[#565656] p-4"
            >
              <FaLinkedin className="size-8 sm:size-6" />
            </Link>
          </div>
        </div>
      </section>
    );
  },
);

export default ContactUs;
