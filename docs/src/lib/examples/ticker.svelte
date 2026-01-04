<script lang="ts">
    import * as Ticker from "$lib/registry/components/ticker";
    import GOOG from "$lib/assets/GOOG.jpg";

    const ticker = "GOOG";
</script>

<Ticker.Root>
    <Ticker.Icon>
        <img
            alt={ticker}
            height={26}
            src={GOOG}
            width={26}
        />
    </Ticker.Icon>
    <Ticker.Symbol symbol={ticker} />
    <Ticker.Price price={175.41} />
    <Ticker.PriceChange change={2.13} />
</Ticker.Root>
