<script lang="ts">
    import Blocks from "$lib/components/internal/home/blocks.svelte";
    import CallToAction from "$lib/components/internal/home/call-to-action.svelte";
    import Components from "$lib/components/internal/home/components.svelte";
    import Footer from "$lib/components/internal/home/footer.svelte";
    import Hero from "$lib/components/internal/home/hero.svelte";
    import Patterns from "$lib/components/internal/home/patterns.svelte";
    import Tweets from "$lib/components/internal/home/tweets.svelte";


</script>

<div class="grid w-full gap-16 p-4 sm:gap-24">
    <Hero />
    <Components />
    <Blocks />
    <Patterns />
    <Tweets />
    <CallToAction />
    <Footer />
</div>
