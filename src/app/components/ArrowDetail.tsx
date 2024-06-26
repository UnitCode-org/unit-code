"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const ArrowDetail = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn("relative w-full px-8 pb-48 pt-16 sm:px-16", className)}
        ref={ref}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mx-auto flex max-w-screen-2xl flex-col items-center gap-y-12 text-center"
        >
          <Image
            src="/images/arrow-3d.png"
            alt="Unit Code"
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="z-50 mx-auto w-full max-w-xs object-cover"
          />
          <div className="mx-auto flex max-w-screen-md flex-col items-center gap-y-12 text-center">
            <h2 className="max-w-3xl text-2xl font-semibold sm:text-5xl">
              An international collaborative of blockchain pioneers
            </h2>
            <div className="z-50 flex max-w-screen-2xl flex-col gap-y-6 text-sm text-[#b9bac3] sm:text-lg">
              <p>
                Unit Code is a global collective of diverse cultures, bringing
                together some of the brightest minds in blockchain technology.
              </p>
              <p>
                From it’s humble beginnings, Unit Code now operates remotely
                with a team from all corners of the world, united in their
                mission to innovate and transform the future of finance.
              </p>
            </div>
          </div>
        </motion.div>
        <Image
          src="/images/gradient-3.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute right-0 top-[-400px] z-30 h-full w-auto animate-pulse-slow object-cover sm:top-[-800px] sm:h-auto sm:w-full"
        />
        <Image
          src="/images/gradient-4.png"
          alt=""
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none absolute left-0 top-[-50px] z-30 h-full w-auto animate-pulse-slow object-cover sm:top-[-500px] sm:h-auto sm:w-full"
        />
      </section>
    );
  },
);

export default ArrowDetail;
