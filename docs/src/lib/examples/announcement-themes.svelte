<script lang="ts">
    import * as Announcement from "$lib/registry/components/announcement";
    import { ArrowUpRight } from "@lucide/svelte";
</script>

<Announcement.Root
    class="bg-rose-100 text-rose-700 dark:bg-rose-700 dark:text-rose-100"
    themed
>
    <Announcement.Tag>Error</Announcement.Tag>
    <Announcement.Title>
        Something went wrong
        <ArrowUpRight class="shrink-0 opacity-70" size={16} />
    </Announcement.Title>
</Announcement.Root>

<Announcement.Root
    class="bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100"
    themed
>
    <Announcement.Tag>Success</Announcement.Tag>
    <Announcement.Title>
        New feature added
        <ArrowUpRight class="shrink-0 opacity-70" size={16} />
    </Announcement.Title>
</Announcement.Root>

<Announcement.Root
    class="bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100"
    themed
>
    <Announcement.Tag>Warning</Announcement.Tag>
    <Announcement.Title>
        Approaching your limit
        <ArrowUpRight class="shrink-0 opacity-70" size={16} />
    </Announcement.Title>
</Announcement.Root>

<Announcement.Root
    class="bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-100"
    themed
>
    <Announcement.Tag>Info</Announcement.Tag>
    <Announcement.Title>
        Welcome to the platform
        <ArrowUpRight class="shrink-0 opacity-70" size={16} />
    </Announcement.Title>
</Announcement.Root>
