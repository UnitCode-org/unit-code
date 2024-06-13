import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const UnitNetwork = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn(
          "relative z-40 w-full overflow-hidden bg-white px-8 py-16 pb-80 sm:px-16 sm:py-36 xl:py-52",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 items-center gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-y-4 text-center font-semibold md:pr-0 lg:items-start lg:text-start">
            <h2 className="text-2xl text-unit-black-80 sm:text-5xl">
              Explore <span className="text-unit-purple-40">Unit Network</span>
            </h2>
            <p className="px-8 text-center text-sm font-light text-[#5a5a5a] sm:px-24 sm:text-base md:px-0 lg:text-start">
              Our greatest project yet, Unit Network redefines a new financial
              system, powered by AI, blockchain, and the tokenization of assets
              in the real world.
            </p>
            <div className="mt-6 flex items-center gap-x-3">
              <Link href="https://app.unit.network/login">
                <Button variant="default" className="bg-[#01000A]">
                  Explore the full platform
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/images/unit-3d.png"
            alt="Unit Network"
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 right-0 w-full max-w-3xl object-cover sm:w-[50vw]"
          />
        </div>
      </section>
    );
  },
);

export default UnitNetwork;
