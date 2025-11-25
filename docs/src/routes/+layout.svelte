<script lang="ts">
	import "../app.css";
	import favicon from '$lib/assets/favicon.svg';
    import NavBar from "$lib/components/internal/nav/nav-bar.svelte";
    import { Toaster } from "$lib/components/ui/sonner";
	import { TooltipProvider } from "$lib/components/ui/tooltip";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

<Toaster />

<TooltipProvider>
	<div class="mt-15">
		{@render children?.()}
	</div>
</TooltipProvider>
