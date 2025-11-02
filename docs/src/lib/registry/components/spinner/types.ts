import type { IconProps } from "@lucide/svelte";

export type SpinnerProps = IconProps & {
    variant?:
        | "default"
        | "throbber"
        | "pinwheel"
        | "circle-filled"
        | "ellipsis"
        | "ring"
        | "bars"
        | "infinite";
};

export type SpinnerVariantProps = Omit<SpinnerProps, "variant">;
