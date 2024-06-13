"use client";
import Image from "next/image";
import { forwardRef } from "react";
import { FaPlay } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const { contactUsRef, aboutUsRef } = useIndexRefStore();

    return (
      <section
        className={cn(
          "flex w-full max-w-screen-lg grid-cols-1 flex-col-reverse items-center gap-x-8 gap-y-8 overflow-hidden px-8 pb-12 pt-32 sm:grid sm:min-h-screen sm:px-16 sm:pb-0 sm:pt-36 lg:grid-cols-2 lg:pt-0",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex flex-col items-start justify-start gap-y-4 text-center font-semibold sm:items-center sm:justify-center md:pr-0 lg:items-start lg:text-start">
          <p className="text-sm font-light md:text-base">Unit Code</p>
          <h1 className="text-start text-4xl md:text-6xl">
            Building ideas into reality
          </h1>
          <p className="text-start text-base font-light md:text-xl">
            We are a collective of passionate tech experts dedicated to crafting
            revolutionary blockchain applications.
          </p>
          <div className="mt-6 flex items-center gap-x-3">
            <Button
              variant="default"
              onClick={() => {
                if (aboutUsRef && aboutUsRef.current) {
                  const top =
                    aboutUsRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              About Us
            </Button>
            <Button
              variant="outline"
              className="group gap-x-3"
              onClick={() => {
                if (contactUsRef && contactUsRef.current) {
                  const top =
                    contactUsRef.current.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              <FaPlay className="size-5 text-white group-hover:text-black" />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
        <Image
          src="/images/logo-3d.png"
          alt="Unit Code"
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="z-10 w-full object-cover"
        />
        <Image
          src="/images/gradient-1.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute right-0 z-0 h-full w-auto animate-pulse-slow object-cover sm:h-auto sm:w-2/3"
        />
      </section>
    );
  },
);

export default Hero;
