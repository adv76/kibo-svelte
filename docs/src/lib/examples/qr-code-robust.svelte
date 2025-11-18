<script lang="ts">
    import { QRCode } from "$lib/registry/components/qr-code";
    import type { ComponentProps } from "svelte";

    const robustnessOptions: ComponentProps<typeof QRCode>["robustness"][] = [
        "L",
        "M",
        "Q",
        "H"
    ];
</script>

<div class="grid grid-cols-4 gap-4">
    {#each robustnessOptions as robustness(robustness)}
      <div class="flex flex-col items-center gap-2">
        <QRCode data="https://www.haydenbleasel.com/" {robustness} />
        <p class="font-medium text-muted-foreground text-sm">
            {robustness}
        </p>
      </div>
    {/each}
</div>
