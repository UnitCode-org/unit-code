"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const AboutUs = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, _ref) => {
    const aboutUsRef = useRef<HTMLDivElement>(null);

    const { setAboutUsRef } = useIndexRefStore();

    useEffect(() => {
      setAboutUsRef(aboutUsRef);
    }, []);

    return (
      <section
        className={cn(
          "relative w-full overflow-clip px-8 pb-24 pt-72 sm:px-16",
          className,
        )}
        ref={aboutUsRef}
        {...props}
      >
        <motion.div
          className="relative z-50 mx-auto flex max-w-screen-2xl flex-col items-center gap-y-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="z-50 max-w-4xl space-y-4 text-2xl font-semibold sm:text-5xl">
            We're on a mission to revolutionize the blockchain ecosystem
          </h2>
          <div className="z-50 flex max-w-screen-md flex-col gap-y-6 text-sm text-[#b9bac3] sm:text-lg">
            <p>
              At Unit Code, we are dedicated to developing state-of-the-art
              decentralized platform applications that transform and redefine
              possibilities.
            </p>
            <p>
              Our solutions leverage blockchain technology to create secure,
              transparent, and efficient systems that empower users.
            </p>
          </div>
          <Link href="https://unit.network/" className="z-50">
            <Button variant="outline">Learn More</Button>
          </Link>
        </motion.div>
        <Image
          src="/images/stars.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 mx-auto w-4/5 object-cover"
        />
        <Image
          src="/images/gradient-2.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 right-0 top-0 z-20 mx-auto hidden w-full rotate-180 animate-pulse-slow object-cover sm:block"
        />
        <Image
          src="/images/gradient-2.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 right-0 top-0 z-20 mx-auto hidden w-full rotate-180 animate-pulse-slow object-cover sm:block"
        />
        <Image
          src="/images/gradient-2.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-[-50vw] right-0 top-0 z-20 mx-auto w-[200vw] max-w-none rotate-180 animate-pulse-slow object-cover sm:left-0 sm:w-full"
        />
        <div className="absolute left-[-25vw] top-0 z-30 mx-auto mt-32 size-[150vw] rounded-full bg-[#0a0004]" />
      </section>
    );
  },
);

export default AboutUs;
