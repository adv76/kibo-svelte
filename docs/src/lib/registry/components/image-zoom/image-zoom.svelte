<script lang="ts">
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";
    import Zoom from "svelte-medium-image-zoom";

    let {
        class: className,
        backdropClassName,
        children,
        ...restProps
    }: ComponentProps<typeof Zoom> & {
        class?: string;
        backdropClassName?: string;
    } = $props();
</script>

<div
    class={cn(
        "relative",
        "[&_[data-smiz-ghost]]:pointer-events-none [&_[data-smiz-ghost]]:absolute",
        "[&_[data-smiz-btn-zoom]]:m-0 [&_[data-smiz-btn-zoom]]:size-10 [&_[data-smiz-btn-zoom]]:touch-manipulation [&_[data-smiz-btn-zoom]]:appearance-none [&_[data-smiz-btn-zoom]]:rounded-[50%] [&_[data-smiz-btn-zoom]]:border-none [&_[data-smiz-btn-zoom]]:bg-foreground/70 [&_[data-smiz-btn-zoom]]:p-2 [&_[data-smiz-btn-zoom]]:text-background [&_[data-smiz-btn-zoom]]:outline-offset-2",
        "[&_[data-smiz-btn-unzoom]]:m-0 [&_[data-smiz-btn-unzoom]]:size-10 [&_[data-smiz-btn-unzoom]]:touch-manipulation [&_[data-smiz-btn-unzoom]]:appearance-none [&_[data-smiz-btn-unzoom]]:rounded-[50%] [&_[data-smiz-btn-unzoom]]:border-none [&_[data-smiz-btn-unzoom]]:bg-foreground/70 [&_[data-smiz-btn-unzoom]]:p-2 [&_[data-smiz-btn-unzoom]]:text-background [&_[data-smiz-btn-unzoom]]:outline-offset-2",
        "[&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:pointer-events-none [&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:absolute [&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:size-px [&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:overflow-hidden [&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:whitespace-nowrap [&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:[clip-path:inset(50%)] [&_[data-smiz-btn-zoom]:not(:focus):not(:active)]:[clip:rect(0_0_0_0)]",
        "[&_[data-smiz-btn-zoom]]:absolute [&_[data-smiz-btn-zoom]]:top-2.5 [&_[data-smiz-btn-zoom]]:right-2.5 [&_[data-smiz-btn-zoom]]:bottom-auto [&_[data-smiz-btn-zoom]]:left-auto [&_[data-smiz-btn-zoom]]:cursor-zoom-in",
        "[&_[data-smiz-btn-unzoom]]:absolute [&_[data-smiz-btn-unzoom]]:top-5 [&_[data-smiz-btn-unzoom]]:right-5 [&_[data-smiz-btn-unzoom]]:bottom-auto [&_[data-smiz-btn-unzoom]]:left-auto [&_[data-smiz-btn-unzoom]]:z-[1] [&_[data-smiz-btn-unzoom]]:cursor-zoom-out",
        '[&_[data-smiz-content="found"]_img]:cursor-zoom-in',
        '[&_[data-smiz-content="found"]_svg]:cursor-zoom-in',
        '[&_[data-smiz-content="found"]_[role="img"]]:cursor-zoom-in',
        '[&_[data-smiz-content="found"]_[data-zoom]]:cursor-zoom-in',
        className
    )}
>
    <Zoom
        class_dialog={cn(
            "[&::backdrop]:hidden",
            "[&[open]]:fixed [&[open]]:m-0 [&[open]]:h-dvh [&[open]]:max-h-none [&[open]]:w-dvw [&[open]]:max-w-none [&[open]]:overflow-hidden [&[open]]:border-0 [&[open]]:bg-transparent [&[open]]:p-0",
            "[&_[data-smiz-modal-overlay]]:absolute [&_[data-smiz-modal-overlay]]:inset-0 [&_[data-smiz-modal-overlay]]:transition-all",
            '[&_[data-smiz-modal-overlay="hidden"]]:bg-transparent',
            '[&_[data-smiz-modal-overlay="visible"]]:bg-background/80 [&_[data-smiz-modal-overlay="visible"]]:backdrop-blur-md',
            "[&_[data-smiz-modal-content]]:relative [&_[data-smiz-modal-content]]:size-full",
            "[&_[data-smiz-modal-img]]:absolute [&_[data-smiz-modal-img]]:origin-top-left [&_[data-smiz-modal-img]]:cursor-zoom-out [&_[data-smiz-modal-img]]:transition-transform",
            "motion-reduce:[&_[data-smiz-modal-img]]:transition-none motion-reduce:[&_[data-smiz-modal-overlay]]:transition-none",
            backdropClassName
        )}
        {...restProps}
    >
        {@render children?.()}
    </Zoom>
</div>
