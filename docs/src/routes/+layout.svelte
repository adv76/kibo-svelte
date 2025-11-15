<script lang="ts">
	import "../app.css";
	import favicon from '$lib/assets/favicon.svg';
    import NavBar from "$lib/components/internal/nav/nav-bar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

<div class="mt-15">
	{@render children?.()}
</div>
