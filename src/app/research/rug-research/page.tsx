import ArticleLayout from "@/components/research/ArticleLayout";

export default function RugResearchPage() {
  return (
    <ArticleLayout category="Research" title="Rug Pull Research">
      <h2 className="font-semibold text-black">Overview</h2>
      <p>
        This research examines the structural conditions that precede rug
        pulls within the Solana token ecosystem. The objective is not to
        document incidents retrospectively, but to identify measurable
        onchain properties that are present before liquidity is removed or
        supply is concentrated. These properties are typically observable
        at the point of deployment, which places the emphasis of this
        research on launch conditions rather than post incident forensics.
      </p>

      <h2 className="font-semibold text-black">Background</h2>
      <p>
        A rug pull, in the context of this research, refers to a token
        event in which holders lose access to expected value due to
        unilateral action by a deployer or a small set of privileged
        wallets. This can occur through removal of pooled liquidity,
        exercise of retained contract permissions, or coordinated
        distribution of concentrated token supply.
      </p>
      <p>
        Across documented cases, a consistent pattern emerges. The
        conditions that make a rug pull possible are established at
        deployment, not introduced afterward. Liquidity control,
        supply distribution, and contract authority are typically fixed at
        launch and remain static until the event occurs. This suggests that
        the relevant risk factors are structural rather than behavioral,
        and therefore observable in advance rather than only detectable
        after the fact.
      </p>

      <h2 className="font-semibold text-black">Technical Concepts</h2>
      <p>
        The following onchain properties form the basis of this research.
      </p>
      <p>
        <strong>Supply concentration</strong> refers to the distribution of
        token holdings across wallets at the time of deployment and in the
        period immediately following. High concentration among a small
        number of wallets, particularly wallets connected to the deployer,
        increases the potential impact of coordinated selling.
      </p>
      <p>
        <strong>Liquidity control</strong> refers to whether liquidity
        provider positions can be withdrawn unilaterally, without a time
        delay, multisig requirement, or lock mechanism. Liquidity that can
        be removed by a single wallet at any time represents a structural
        point of failure for holders.
      </p>
      <p>
        <strong>Contract permissions</strong> refer to authorities retained
        by the deployer after launch, including mint authority, freeze
        authority, and upgrade authority. Retained authorities allow the
        deployer to alter token supply, restrict transfers, or modify
        contract behavior after holders have already acquired the token.
      </p>

      <h2 className="font-semibold text-black">Methodology</h2>
      <p>
        This research catalogs confirmed rug pull cases by deployer wallet,
        token contract address, and associated liquidity pool. For each
        case, three data points are recorded at the time of deployment:
        supply distribution across holder wallets, liquidity pool
        configuration and lock status, and the set of contract authorities
        retained by the deployer.
      </p>
      <p>
        These data points are then compared against a control set of
        tokens that did not experience a rug pull, drawn from the same
        general period and category. The comparison is used to identify
        which structural conditions are disproportionately present in
        confirmed rug pull cases, producing a working set of indicators
        rather than a single rule or threshold.
      </p>

      <h2 className="font-semibold text-black">Observations</h2>
      <p>
        Preliminary findings indicate that structural warning signs are
        typically present from the moment of deployment, rather than
        emerging gradually over time. Confirmed rug pull cases in the
        dataset consistently show at least two of the three structural
        conditions described above, most commonly unrestricted liquidity
        control combined with concentrated early supply.
      </p>
      <p>
        The primary constraint observed is not the absence of signal, but
        the lack of accessible tooling to surface these conditions at the
        point of launch, before liquidity is withdrawn or supply is further
        concentrated.
      </p>

      <h2 className="font-semibold text-black">Limitations</h2>
      <p>
        The structural indicators identified in this research describe
        conditions correlated with historical rug pulls. They do not
        constitute a deterministic conclusion that a token exhibiting these
        conditions will fail in the same manner. Legitimate projects may
        exhibit individual characteristics found in this research, such as
        concentrated early supply during a fair launch phase or a delayed
        liquidity lock during initial setup, without any intent to defraud
        holders.
      </p>
      <p>
        Additionally, the current dataset is limited to cases that have
        been publicly identified and confirmed. This introduces a
        selection bias toward incidents that were visible and reported,
        which may not represent the full range of failure patterns present
        across the broader ecosystem.
      </p>

      <h2 className="font-semibold text-black">Research Objective</h2>
      <p>
        The long term objective of this research is to move from
        retrospective case analysis toward a systematic framework for
        evaluating launch conditions. This involves developing a
        structured method to assess a token&apos;s onchain properties at
        deployment against known structural indicators, using verifiable
        onchain evidence rather than external reporting or community
        sentiment.
      </p>

      <h2 className="font-semibold text-black">Future Direction</h2>
      <p>
        Future work will extend this catalog beyond individual token
        events to include deployer history across multiple launches. This
        would allow structural indicators to be evaluated at the deployer
        level, incorporating prior launch outcomes and deployment
        frequency alongside the token level indicators described in this
        research.
      </p>
    </ArticleLayout>
  );
}