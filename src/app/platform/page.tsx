import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ComingSoonBadge from "@/components/shared/ComingSoonBadge";
import { PLATFORM_MODULES } from "@/lib/constants";

export default function PlatformPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-3xl text-center">
        <ComingSoonBadge className="mx-auto" />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black md:text-5xl">
          Platform
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-black/60">
          The OwlScope Intelligence Platform is currently under development.
          The modules below describe the intended research direction, not
          currently available product claims. OwlScope is being designed to
          organize wallet history, deployer records, liquidity conditions, and
          model assisted classification into a subscription research workflow.
        </p>
        <div className="mt-8">
          <Button href="/foundation/contact" variant="primary">
            Join Waitlist
          </Button>
        </div>
      </Container>

      <Container className="mt-20">
        <p className="text-center text-[13px] uppercase tracking-[0.2em] text-black/40">
          Expected Modules
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_MODULES.map((module) => (
            <Card key={module.name}>
              <h3 className="text-lg font-semibold text-black">
                {module.name}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-black/60">
                {module.description}
              </p>
              <div className="mt-6">
                <ComingSoonBadge />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}