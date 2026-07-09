import ArticleLayout from "@/components/research/ArticleLayout";

export default function BehaviorAnalysisPage() {
  return (
    <ArticleLayout category="Research" title="Behavior Analysis">
      <h2 className="font-semibold text-black">Overview</h2>
      <p>
        This research area examines behavioral patterns among developers and
        early holders following a token launch, studying how wallet
        activity in the hours and days after deployment relates to a
        token&apos;s trajectory over time.
      </p>

      <h2 className="font-semibold text-black">Background</h2>
      <p>
        Metrics available at launch describe a token&apos;s starting
        conditions, but they do not capture how a deployer or early holders
        actually behave afterward. Developer and holder behavior in the
        period immediately following launch provides additional context
        that launch metrics alone cannot show.
      </p>

      <h2 className="font-semibold text-black">Technical Concepts</h2>
      <p>
        Several onchain behaviors are relevant to this research:
      </p>
      <p>
        <strong>distribution pacing</strong> describes the rate and pattern
        at which a wallet reduces its holdings over time, as opposed to a
        single large transfer.
      </p>
      <p>
        <strong>liquidity withdrawal timing</strong> describes how quickly
        after launch a wallet removes liquidity it provided.
      </p>
      <p>
        <strong>holder engagement</strong> describes recurring wallet
        activity within a token&apos;s ecosystem, such as continued
        transactions or protocol interactions beyond the initial launch
        window.
      </p>

      <h2 className="font-semibold text-black">Methodology</h2>
      <p>
        Developer and early holder wallets are tracked across a set of
        tokens, recording distribution pacing, liquidity withdrawal timing,
        and ongoing wallet activity in the days following launch. These
        behavioral records are then compared against each token&apos;s
        subsequent trajectory.
      </p>

      <h2 className="font-semibold text-black">Observations</h2>
      <p>
        Wallets that distribute holdings gradually, avoid rapid liquidity
        withdrawal, and remain active within the ecosystem tend to
        correlate with different trajectories than wallets that do not.
        These are observed correlations rather than established causes.
      </p>

      <h2 className="font-semibold text-black">Research Objective</h2>
      <p>
        The objective is to document behavioral patterns among developers
        and early holders as an additional layer of context, separate from
        and complementary to launch metrics.
      </p>

      <h2 className="font-semibold text-black">Future Direction</h2>
      <p>
        Future work will expand this research to compare behavioral
        patterns across a larger set of tokens and longer time windows,
        refining which behaviors are most consistently associated with
        different outcomes.
      </p>
    </ArticleLayout>
  );
}