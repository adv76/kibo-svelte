<script lang="ts">
    import * as Ticker from "$lib/registry/components/ticker";
    import DUOL from "$lib/assets/DUOL.jpg";
    import DBD from "$lib/assets/DBD.jpg";
    import TM from "$lib/assets/TM.jpg";

    const items = [
        {
            symbol: "DUOL",
            src: DUOL,
            price: 478.03,
            change: 5.2,
        },
        {
            symbol: "DBD",
            src: DBD,
            price: 102.33,
            change: 1.05,
            currency: "EUR",
            locale: "de-DE",
        },
        {
            symbol: "7203.T",
            src: TM,
            price: 2460,
            change: -120,
            currency: "JPY",
            locale: "ja-JP",
        },
    ];
</script>

{#each items as i(i.symbol)}
    <Ticker.Root currency={i.currency} locale={i.locale}>
        <Ticker.Icon>
            <img alt={i.symbol} height={26} src={i.src} width={26} />
        </Ticker.Icon>
        <Ticker.Symbol symbol={i.symbol} />
        <Ticker.Price price={i.price} />
        <Ticker.PriceChange change={i.change} />
    </Ticker.Root>
{/each}
