import Image from "next/image";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Banner */}
        <div className="mx-auto mb-14 max-w-3xl animate-[float_6s_ease-in-out_infinite]">
          <Image
            src={BRAND.banner}
            alt={BRAND.name}
            width={800}
            height={400}
            priority
            className="mx-auto h-auto w-full"
          />
        </div>

        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            {BRAND.tagline}
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-black/60 md:text-base">
            Helping researchers examine wallets, deployer behavior, liquidity
            conditions, and meme coin risk with structured onchain evidence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/mission" variant="primary">
              Read Mission
            </Button>
            <Button href="/research" variant="secondary">
              View Research
            </Button>
            <Button href="/platform" variant="outline">
              Platform Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}