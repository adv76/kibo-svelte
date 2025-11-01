<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Check, Copy } from "@lucide/svelte";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        value,
        onCopy,
        onError,
        timeout = 2000,
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof Button> & {
        value: string;
        onCopy?: () => void;
        onError?: (error: Error) => void;
        timeout?: number;
    } = $props();

    let isCopied = $state(false);

    const copyToClipboard = () => {
        if (
            typeof window === "undefined" ||
            !navigator.clipboard.writeText ||
            !value
        ) {
            return;
        }

        navigator.clipboard.writeText(value).then(() => {
            isCopied = true;
            onCopy?.();

            setTimeout(() => isCopied = false, timeout);
        }, onError);
    };
</script>
  
<Button
    class="opacity-0 transition-opacity group-hover:opacity-100"
    onclick={copyToClipboard}
    size="icon"
    variant="ghost"
    {...restProps}
>
    {#if children}
        {@render children()}
    {:else if isCopied}
        <Check size={14} />
    {:else}
        <Copy size={14} />
    {/if}
</Button>
