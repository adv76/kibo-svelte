<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        src,
        ...restProps
    }: HTMLAttributes<HTMLVideoElement> & {
        src?: string;
    } = $props();

    const tRegex = /t=(\d+(?:\.\d+)?)/;

    let videoRef: HTMLVideoElement;
    let initialTime = $derived.by(() => {
        const currSrc = src ?? "";

        if (typeof currSrc === "string") {
            const hashIndex = currSrc.indexOf("#");
            if (hashIndex !== -1) {
                const hash = currSrc.slice(hashIndex + 1);
                // Look for t=number or t=start,end
                const tMatch = hash.match(tRegex);
                if (tMatch) {
                    return Number.parseFloat(tMatch[1]);
                }
            }
        }
        return 0;
    });

    const handleMouseOver = () => {
        videoRef?.play();
    };

    const handleMouseOut = () => {
        if (videoRef) {
            videoRef.pause();
            videoRef.currentTime = initialTime;
        }
    };

    const handleFocus = () => {
        videoRef?.play();
    };

    const handleBlur = () => {
        if (videoRef) {
            videoRef.pause();
            videoRef.currentTime = initialTime;
        }
    };
</script>

<video
    bind:this={videoRef}
    {src}
    class={cn(
    "absolute inset-0 size-full object-cover",
    "transition-opacity duration-200",
    "group-hover:opacity-90",
    className
    )}
    loop
    muted
    onblur={handleBlur}
    onfocus={handleFocus}
    onmouseout={handleMouseOut}
    onmouseover={handleMouseOver}
    preload="metadata"
    tabIndex={0}
    {...restProps}
></video>
