<script lang="ts">
    import * as Banner from "$lib/registry/components/banner";
    import { CircleAlert } from "@lucide/svelte";
</script>

<Banner.Root>
    <Banner.Icon icon={CircleAlert} />
    <Banner.Title>Important message</Banner.Title>
    <Banner.Action>Learn more</Banner.Action>
    <Banner.Close />
</Banner.Root>
