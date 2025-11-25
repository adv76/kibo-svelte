<script lang="ts">
    import * as Banner from "$lib/registry/components/banner";
    import { CircleAlert } from "@lucide/svelte";
</script>

<div
    class="w-full"
    style= "--primary: oklch(0.637 0.237 25.331); --primary-foreground: oklch(0.971 0.013 17.38);"
>
    <Banner.Root>
        <Banner.Icon icon={CircleAlert} />
        <Banner.Title>
            Something's gone <strong>horribly</strong> wrong.
        </Banner.Title>
        <Banner.Action>Restart</Banner.Action>
        <Banner.Close />
    </Banner.Root>
</div>
<div
    class="w-full"
    style="--primary: oklch(0.705 0.213 47.604); --primary-foreground: oklch(0.98 0.016 73.684);"
>
    <Banner.Root>
        <Banner.Icon icon={CircleAlert} />
        <Banner.Title>You're almost out of disk space.</Banner.Title>
        <Banner.Action>Upgrade</Banner.Action>
        <Banner.Close />
    </Banner.Root>
</div>
<div
    class="w-full"
    style="--primary: oklch(0.723 0.219 149.579); --primary-foreground: oklch(0.982 0.018 155.826);"
>
    <Banner.Root>
        <Banner.Icon icon={CircleAlert} />
        <Banner.Title>You've been selected for a secret mission.</Banner.Title>
        <Banner.Action>Accept</Banner.Action>
        <Banner.Close />
    </Banner.Root>
</div>
