import ArticleLayout from "@/components/research/ArticleLayout";

export default function MarketStructurePage() {
  return (
    <ArticleLayout category="Research" title="Market Structure">
      <h2 className="font-semibold text-black">Overview</h2>
      <p>
        This research examines the structural dynamics that underlie meme
        coin trading on Solana, with particular attention to liquidity
        conditions and trading behavior that price charts do not reveal.
        The objective is to describe how a token&apos;s underlying market
        structure shapes its behavior under trading pressure, independent
        of price movement.
      </p>

      <h2 className="font-semibold text-black">Background</h2>
      <p>
        Meme coin liquidity differs structurally from liquidity in
        traditional financial markets. It is typically concentrated
        within a small number of pools, disproportionately sensitive to
        individual large trades, and frequently provided by the same
        wallets responsible for deploying the token. These characteristics
        affect how a token responds to buying and selling pressure in ways
        that are not observable from price action alone.
      </p>
      <p>
        Two tokens can display similar price charts while operating under
        materially different structural conditions. A chart reflects the
        outcome of trading activity, not the liquidity and distribution
        conditions that produced it. This distinction is the central
        motivation for studying market structure directly, rather than
        inferring it from price history.
      </p>

      <h2 className="font-semibold text-black">Technical Concepts</h2>
      <p>
        The following onchain properties form the basis of this research.
      </p>
      <p>
        <strong>Pool depth</strong> refers to the amount of liquidity
        available at a given price level within a trading pool. Shallow
        pool depth means that relatively small trades can produce
        disproportionately large price movements.
      </p>
      <p>
        <strong>Liquidity lock status</strong> refers to whether liquidity
        provider positions are secured through a time lock or multisig
        arrangement, or whether they remain freely removable by a single
        wallet. Unlocked liquidity represents a condition under which
        available trading depth can be withdrawn without notice.
      </p>
      <p>
        <strong>Volume distribution</strong> refers to how trading volume
        is spread across participating wallets and pools, as opposed to
        being concentrated among a small number of participants. Volume
        concentrated in few wallets indicates that observed trading
        activity may not reflect broad market participation.
      </p>

      <h2 className="font-semibold text-black">Methodology</h2>
      <p>
        Pool depth, liquidity lock configuration, and volume distribution
        are recorded across a set of tokens at consistent intervals and
        compared over time. This allows market structure to be evaluated
        as an independent variable, separate from price, using underlying
        liquidity and trading conditions rather than price action as the
        primary unit of analysis.
      </p>
      <p>
        Where possible, tokens are grouped by category and launch
        conditions to control for factors unrelated to market structure,
        allowing structural differences between similar tokens to be
        identified more clearly.
      </p>

      <h2 className="font-semibold text-black">Observations</h2>
      <p>
        Tokens with visually similar price charts frequently exhibit
        materially different market structure. Shallow pool depth,
        unlocked liquidity, and volume concentrated among a small number
        of wallets are structural conditions that increase a token&apos;s
        sensitivity to individual trades, regardless of how the price
        chart appears at a given point in time.
      </p>
      <p>
        In cases observed to date, structural fragility is often present
        well before it becomes visible through price behavior, suggesting
        that liquidity and volume conditions can serve as an earlier
        indicator of market resilience than price movement alone.
      </p>

      <h2 className="font-semibold text-black">Limitations</h2>
      <p>
        Market structure indicators describe present liquidity and trading
        conditions. They do not predict future price movement or
        guarantee that a structurally fragile token will experience a
        specific outcome. External factors, including shifts in demand or
        broader market conditions, can affect price independently of the
        structural conditions described in this research.
      </p>
      <p>
        Additionally, pool depth and volume distribution can change
        quickly relative to the intervals at which data is recorded,
        meaning observations reflect conditions at the time of measurement
        rather than a continuous or real time state.
      </p>

      <h2 className="font-semibold text-black">Research Objective</h2>
      <p>
        The objective of this research is to describe how resilient or
        fragile a token&apos;s market actually is, based on liquidity and
        trading structure rather than price history alone, and to
        establish a consistent framework for evaluating that resilience
        across different tokens.
      </p>

      <h2 className="font-semibold text-black">Future Direction</h2>
      <p>
        Future work will extend this analysis to track changes in market
        structure over time, allowing shifts in liquidity and volume
        distribution to be observed as they develop rather than
        reconstructed after the fact.
      </p>
    </ArticleLayout>
  );
}