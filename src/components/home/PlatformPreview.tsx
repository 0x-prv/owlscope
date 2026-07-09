import ComingSoonBadge from "@/components/shared/ComingSoonBadge";
import Button from "@/components/ui/Button";

export default function PlatformPreview() {
  return (
    <section className="border-t border-black/10 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ComingSoonBadge className="mx-auto" />
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          The OwlScope Intelligence Platform
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-black/60">
          Currently under development. AI Risk Engine, Wallet Intelligence,
          Developer Reputation, Threat Detection, Smart Alerts, and Auto Exit
          Protection are all on the way.
        </p>
        <div className="mt-8">
          <Button href="/platform" variant="primary">
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}