<script lang="ts">
    import * as Announcement from "$lib/registry/components/announcement";
    import { ArrowUpRight } from "@lucide/svelte";
</script>

<Announcement.Root>
    <Announcement.Title>
        New feature added
        <ArrowUpRight className="shrink-0 text-muted-foreground" size={16} />
    </Announcement.Title>
</Announcement.Root>
