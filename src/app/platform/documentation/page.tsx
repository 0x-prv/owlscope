import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ComingSoonBadge from "@/components/shared/ComingSoonBadge";

export default function DocumentationPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-2xl text-center">
        <ComingSoonBadge className="mx-auto" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          Documentation
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-black/60">
          Developer and user documentation for the OwlScope Intelligence
          Platform will be published here once the platform enters public
          testing.
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