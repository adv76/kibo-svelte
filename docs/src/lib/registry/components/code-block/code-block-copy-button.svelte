<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";
    import { getContext } from "./code-block-context.svelte";
    import { CheckIcon, CopyIcon } from "@lucide/svelte";

    let {
        ref = $bindable(null),
        onCopy,
        onError,
        timeout = 2000,
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof Button> & {
        onCopy?: () => void;
        onError?: (error: Error) => void;
        timeout?: number;
    } = $props();

    const ctx = getContext();

    let isCopied = $state(false);
    const code = $derived(ctx.data.find((item) => item.language === ctx.value)?.code);

    const copyToClipboard = () => {
        if (
            typeof window === "undefined" ||
            !navigator.clipboard.writeText ||
            !code
        ) {
            return;
        }

        navigator.clipboard.writeText(code).then(() => {
            isCopied = true;
            onCopy?.();

            setTimeout(() => isCopied = false, timeout);
        }, onError);
    };

    const Icon = $derived(isCopied ? CheckIcon : CopyIcon);
</script>

<Button
    class={cn("shrink-0", className)}
    onclick={copyToClipboard}
    size="icon"
    variant="ghost"
    {...restProps}
>
    {#if children}
        {@render children()}
    {:else}
        <Icon className="text-muted-foreground" size={14} />
    {/if}
</Button>
