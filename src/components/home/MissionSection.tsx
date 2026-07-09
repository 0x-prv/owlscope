import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export default function MissionSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-[13px] uppercase tracking-[0.25em] text-red-500">
          Mission
        </p>
        <h2 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
          {BRAND.mission}
        </h2>
        <div className="mt-10">
          <Button href="/mission" variant="secondary" className="border-white text-white hover:bg-white hover:text-black">
            Read the Mission
          </Button>
        </div>
      </div>
    </section>
  );
}