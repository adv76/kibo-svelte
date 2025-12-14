<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<SVGSVGElement> = $props();
</script>

{#if children}
    <div
        class={cn(
            "-translate-y-1/2 absolute top-1/2 left-0 w-1/6 shrink-0 rounded-[18%]",
            className
        )}
    >
      {@render children()}
    </div>
{:else}
    <svg
        class={cn(
            "-translate-y-1/2 absolute top-1/2 left-0 w-1/6 shrink-0 rounded-[18%]",
            className
        )}
        enable-background="new 0 0 110 92"
        viewBox="0 0 110 92"
        xmlns="http://www.w3.org/2000/svg"
        {...restProps}
    >
        <title>Chip</title>
        <path
            d="M1 13A12 12 0 0 1 13 1h84a12 12 0 0 1 12 12v66a12 12 0 0 1-12 12H13A12 12 0 0 1 1 79V13Z"
            fill="url(#kibo-credit-card-chip-gradient)"
        />
        <path
            d="M108 71.5H83.65L70.53 60.87A21.41 21.41 0 0 1 56 67.47V90h41a11 11 0 0 0 11-11v-7.5ZM76.48 47a21.38 21.38 0 0 1-4.63 12.36l12.5 10.14H108V47H76.48ZM2 69.5h24.14l12.02-10.12A21.38 21.38 0 0 1 33.52 47H2v22.5Zm53-43c-5.85 0-11.1 2.57-14.68 6.66A19.4 19.4 0 0 0 35.5 46a19.4 19.4 0 0 0 4.82 12.84A19.43 19.43 0 0 0 55 65.5c5.85 0 11.1-2.57 14.68-6.66A19.4 19.4 0 0 0 74.5 46a19.4 19.4 0 0 0-4.82-12.84A19.43 19.43 0 0 0 55 26.5Zm16.85 6.14A21.38 21.38 0 0 1 76.48 45H108V22.5H84.35l-12.5 10.14ZM2 45h31.52a21.38 21.38 0 0 1 4.64-12.38L26.14 22.5H2V45Zm0 34a11 11 0 0 0 11 11h41V67.47a21.41 21.41 0 0 1-14.52-6.59L27.14 71.26l-.27.24H2V79Zm106-66A11 11 0 0 0 97 2H56v22.52c5.7.27 10.83 2.74 14.53 6.61L83.65 20.5H108V13ZM2 20.5h24.87l.27.24 12.34 10.38A21.41 21.41 0 0 1 54 24.52V2H13A11 11 0 0 0 2 13v7.5ZM110 79a13 13 0 0 1-13 13H13A13 13 0 0 1 0 79V13A13 13 0 0 1 13 0h84a13 13 0 0 1 13 13v66Z"
            fill="#000"
        />
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="kibo-credit-card-chip-gradient"
                x1="1"
                x2="112.7"
                y1="46"
                y2="78.12"
            >
                <stop stop-color="#EDE5A6" />
                <stop offset="1" stop-color="#CFA255" />
            </linearGradient>
        </defs>
    </svg>
{/if}
