import ArticleLayout from "@/components/research/ArticleLayout";

export default function AiResearchPage() {
  return (
    <ArticleLayout category="Research" title="AI Research">
      <h2 className="font-semibold text-black">Overview</h2>
      <p>
        This research examines how machine learning models can be applied
        to onchain analysis, with a focus on distinguishing meaningful
        behavioral signal from noise across highly irregular wallet and
        contract activity. The objective is to evaluate where model based
        classification adds reliable value beyond fixed heuristics, and
        where it does not.
      </p>

      <h2 className="font-semibold text-black">Background</h2>
      <p>
        Onchain behavior does not follow the structured, consistent
        patterns typical of traditional financial datasets. Wallets
        behave differently depending on intent, tooling, and context, and
        a single fixed rule is rarely sufficient to classify behavior
        accurately across a large and varied population of wallets and
        contracts. This variability is the primary motivation for
        exploring model based approaches rather than static rule sets
        alone.
      </p>
      <p>
        Static pattern matching can identify known cases but tends to
        generalize poorly to new or slightly modified behavior. Model
        based classification offers a way to generalize across variations
        in behavior, provided the underlying training data and evaluation
        methodology are sound.
      </p>

      <h2 className="font-semibold text-black">Technical Concepts</h2>
      <p>
        The following concepts are relevant to this research.
      </p>
      <p>
        <strong>Wallet clustering</strong> refers to the process of
        grouping wallets that are likely related based on shared funding
        sources, transaction patterns, or behavioral similarity, rather
        than explicit onchain links alone.
      </p>
      <p>
        <strong>Deployer reputation scoring</strong> refers to evaluating
        a deployer wallet based on its historical launch activity,
        including prior token outcomes and deployment frequency, in order
        to produce a structured assessment rather than a binary label.
      </p>
      <p>
        <strong>Behavioral risk classification</strong> refers to
        categorizing wallet or contract activity according to observed
        risk indicators, such as those identified in related research on
        rug pull patterns and market structure, using a consistent and
        repeatable classification process.
      </p>

      <h2 className="font-semibold text-black">Methodology</h2>
      <p>
        Candidate models are evaluated against historical onchain data
        with known outcomes, allowing classification results to be
        compared against confirmed cases rather than assumed correct.
        This includes testing model performance on wallet clustering,
        deployer scoring, and risk classification tasks separately, since
        each task presents distinct data characteristics and failure
        modes.
      </p>
      <p>
        A particular focus of this methodology is identifying where
        classification confidence is low. Rather than treating model
        output as uniformly reliable, this research separates
        high confidence classifications from cases where the underlying
        data is ambiguous or insufficient, since these cases require
        different handling in any eventual product implementation.
      </p>

      <h2 className="font-semibold text-black">Observations</h2>
      <p>
        Model based approaches show measurable improvement over static
        heuristics in identifying wallet relationships that are not
        explicitly connected onchain, particularly in cases involving
        indirect funding paths or intermediary wallets. However,
        performance is not uniform across all classification tasks, and
        certain behavioral categories remain difficult to classify with
        high confidence using currently available data.
      </p>

      <h2 className="font-semibold text-black">Limitations</h2>
      <p>
        Model based classification is dependent on the quality and
        completeness of historical training data. Behavior that differs
        significantly from previously observed patterns, including newly
        emerging tactics, may not be classified reliably until sufficient
        data exists to evaluate it. Classification output should be
        understood as a probabilistic assessment rather than a definitive
        determination.
      </p>
      <p>
        This research does not evaluate model performance in a live,
        adversarial setting where wallet behavior may adapt specifically
        to avoid classification. Current findings are based on historical
        and retrospective data only.
      </p>

      <h2 className="font-semibold text-black">Research Objective</h2>
      <p>
        The objective of this research is to determine which onchain
        classification tasks are well suited to model based approaches,
        and to establish a methodology for evaluating classification
        confidence, as foundational work for the AI Risk Engine and
        Wallet Intelligence modules planned for the OwlScope Intelligence
        Platform. These modules are not yet available and remain under
        active development.
      </p>

      <h2 className="font-semibold text-black">Future Direction</h2>
      <p>
        Future work will extend this research to evaluate model
        performance under more adversarial conditions, and to refine
        classification confidence measures as additional historical
        onchain data becomes available.
      </p>
    </ArticleLayout>
  );
}