import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VisionPage() {
  return (
    <div className="bg-white py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Mission & Vision"
          title="Building the Intelligence Layer for Solana"
        />

        <div className="mt-10 space-y-6 text-[16px] leading-8 text-black/65">
          <p>
            Solana produces a large and continuously growing volume of
            onchain activity, including new wallets, tokens, applications,
            and liquidity events created every day. Every transaction is
            permanently recorded onchain, but the volume and structure of
            this data make it difficult to interpret without significant
            technical effort.
          </p>

          <p>
            Evaluating a wallet, token, or project currently requires
            moving between block explorers, token trackers, decentralized
            exchange analytics, portfolio tools, and community discussion,
            in order to answer a basic question:
            <strong className="text-black">
              {" "}
              is this wallet, token, or project structurally sound.
            </strong>
          </p>

          <p>
            The underlying data already exists onchain. The difficulty is
            not access to data, but interpretation. Identifying
            concentrated wallet control, deployer history, liquidity risk,
            coordinated wallet activity, or relationships between entities
            typically requires manual, time intensive research across
            multiple disconnected tools.
          </p>

          <p>
            OwlScope is building the research layer for Solana. The
            platform organizes raw onchain data into structured research
            objects by analyzing wallets, deployers, token distribution,
            liquidity behavior, and the relationships between them. Rather
            than treating these as separate tools, OwlScope is designed as
            a single investigation workspace, where wallet history,
            deployer background, holder distribution, and liquidity
            conditions can be examined together rather than in isolation.
          </p>

          <p>
            The objective of this research and the platform built on it is
            to make structured onchain investigation accessible to a wider
            range of participants, including traders, researchers,
            security analysts, funds, and institutions, without requiring
            each user to independently reconstruct the same analysis from
            raw transaction data.
          </p>

          <p>
            The long term direction of OwlScope is to become established
            infrastructure for onchain investigation within the Solana
            ecosystem, in the way that dedicated infrastructure has become
            standard practice in other areas of the blockchain industry.
            This means building tools that are used consistently as part
            of ordinary research and decision making, rather than
            consulted only after an incident has already occurred.
          </p>

          <p>
            OwlScope is not focused on producing additional raw data. The
            focus is on structuring existing onchain data into a form that
            is easier to evaluate, verify, and act on, with the underlying
            methodology and limitations of that analysis made explicit
            rather than left implicit.
          </p>
        </div>
      </Container>
    </div>
  );
}