import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ComingSoonBadge from "@/components/shared/ComingSoonBadge";

export default function WhitepaperPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-2xl text-center">
        <ComingSoonBadge className="mx-auto" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          Whitepaper
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-black/60">
          The OwlScope whitepaper is currently in development, covering our
          research methodology, AI risk models, and long-term platform
          vision. It will be published here once ready.
        </p>
        <div className="mt-8">
          <Button href="/platform" variant="secondary">
            Back to Platform
          </Button>
        </div>
      </Container>
    </div>
  );
}