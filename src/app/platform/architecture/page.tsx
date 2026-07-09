import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ComingSoonBadge from "@/components/shared/ComingSoonBadge";

export default function ArchitecturePage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-2xl text-center">
        <ComingSoonBadge className="mx-auto" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black md:text-4xl">
          Architecture
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-black/60">
          Technical documentation for the OwlScope Intelligence Platform is
          currently in preparation, including system design, data
          processing pipelines, and the infrastructure supporting model
          based classification. This section will be updated as the
          platform architecture is finalized.
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