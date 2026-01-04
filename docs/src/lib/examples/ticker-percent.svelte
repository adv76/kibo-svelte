<script lang="ts">
    import * as Ticker from "$lib/registry/components/ticker";
    import TSLA from "$lib/assets/TSLA.jpg";
    import MSFT from "$lib/assets/MSFT.jpg";

    const items = [
        {
            symbol: "TSLA",
            src: TSLA,
            price: 182.12,
            change: -3.12,
        },
        {
            symbol: "MSFT",
            src: MSFT,
            price: 409.33,
            change: 2.18,
        },
    ];
</script>

{#each items as i(i.symbol)}
    <Ticker.Root>
        <Ticker.Icon>
            <img alt={i.symbol} height={26} src={i.src} width={26} />
        </Ticker.Icon>
        <Ticker.Symbol symbol={i.symbol} />
        <Ticker.Price price={i.price} />
        <Ticker.PriceChange change={i.change} isPercent />
    </Ticker.Root>
{/each}
