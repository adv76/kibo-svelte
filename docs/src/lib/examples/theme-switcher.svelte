<script lang="ts">
    import { ThemeSwitcher } from "$lib/registry/components/theme-switcher";

    let theme = $state<"light" | "dark" | "system">("system");
</script>

<ThemeSwitcher bind:value={theme} />
