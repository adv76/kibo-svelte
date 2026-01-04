<script lang="ts">
    import * as Ticker from "$lib/registry/components/ticker";
    import GOOG from "$lib/assets/GOOG.jpg";

    const ticker = "GOOG";
</script>

<p>
    In other autonomous vehicle news, Alphabet-owned{" "}
    <Ticker.Root class="rounded-full bg-muted p-1 pr-2 text-xs">
        <Ticker.Icon>
            <img
                alt={ticker}
                height={20}
                src={GOOG}
                width={20}
            />
        </Ticker.Icon>
        <Ticker.Symbol symbol={ticker} />
        <Ticker.Price price={175.41} />
        <Ticker.PriceChange change={2.13} />
    </Ticker.Root>
    Waymo is looking to bring its robotaxi service to New York.
</p>
