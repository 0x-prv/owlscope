import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ComingSoonBadge from "@/components/shared/ComingSoonBadge";

export default function EarlySignalsPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Mission / Early Signals"
          title="Detecting Onchain Risk Through Wallet and Liquidity Behavior"
        />

        <div className="mt-10 space-y-6 text-[16px] leading-8 text-black/65">
          <p>
            Most onchain risk does not appear suddenly. It usually develops
            through observable patterns such as wallet concentration, repeated
            deployer behavior, abnormal transfers, thin liquidity, rapid holder
            rotation, or coordinated activity between related wallets.
          </p>

          <p>
            OwlScope is being built to analyze these patterns at the wallet,
            token, and market structure level. The platform will monitor how a
            token is launched, how supply is distributed, how liquidity changes,
            how early wallets behave, and whether activity appears organic or
            controlled by a small group of entities.
          </p>

          <p>
            Instead of only showing raw transactions, OwlScope aims to classify
            behavior into understandable risk signals. Examples include high
            holder concentration, connected wallet clusters, suspicious deployer
            history, unusual liquidity movement, repeated sell pressure from
            early wallets, and sudden changes in wallet activity.
          </p>

          <p>
            These signals are not designed to predict price. They are designed
            to help users understand the structure behind a token before making
            a decision. The goal is to provide clear technical context around
            what is happening onchain, why it may matter, and which areas
            require deeper review.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
          <ComingSoonBadge />
          <p className="mt-4 text-[14px] leading-6 text-black/55">
            Automated early signal detection will be part of the OwlScope
            Intelligence Platform. The system is being designed to combine
            wallet graph analysis, token distribution monitoring, liquidity
            tracking, deployer history, and AI assisted explanation into one
            research workflow.
          </p>
        </div>
      </Container>
    </div>
  );
}