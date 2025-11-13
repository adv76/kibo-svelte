<script lang="ts">
    import { Monitor, Moon, Sun } from "@lucide/svelte";
    import { cn } from "$lib/utils";
    import { onMount, untrack } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    const themes = [
        {
            key: "system",
            icon: Monitor,
            label: "System theme",
        },
        {
            key: "light",
            icon: Sun,
            label: "Light theme",
        },
        {
            key: "dark",
            icon: Moon,
            label: "Dark theme",
        },
    ];

    type ThemeSwitcherProps = {
        value?: "light" | "dark" | "system";
        onChange?: (theme: "light" | "dark" | "system") => void;
        className?: string;
    };

    let {
        value = $bindable("system"),
        onChange,
        className
    }: ThemeSwitcherProps = $props();

    let isMounted = $state(false);

    onMount(() => {
        isMounted = true;
    });
    
    $effect(() => {
        value;
        untrack(() => {
            onChange?.(value);
        });
    });

    const setTheme = (theme: "light" | "dark" | "system") => value = theme;
</script>

{#if isMounted}
    <div
        class={cn(
            "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
            className
        )}
    >
        {#each themes as theme(theme.key)}
            {@const isActive = theme.key == value}
            {@const Icon = theme.icon}

            <button
                aria-label={theme.label}
                class="relative h-6 w-6 rounded-full"
                onclick={() => setTheme(theme.key as "light" | "dark" | "system")}
                type="button"
            >
                {#if isActive}
                    <div
                        class="absolute inset-0 rounded-full bg-secondary"
                        transition:fly={{ duration: 500, easing: cubicOut }}
                    >
                    </div>
                {/if} 
                <Icon
                    class={cn(
                        "relative z-10 m-auto h-4 w-4",
                        isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                />
            </button>
        {/each}
    </div>
{/if}
