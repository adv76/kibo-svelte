<script lang="ts">
    import * as RelativeTime from "$lib/registry/components/relative-time";
    import { onMount } from "svelte";

    const timezones = [
        { label: "EST", zone: "America/New_York" },
        { label: "GMT", zone: "Europe/London" },
        { label: "JST", zone: "Asia/Tokyo" },
    ];

    let time = $state(new Date());

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<div class="rounded-md border bg-background p-4">
    <RelativeTime.Root {time}>
        {#each timezones as { zone, label }(zone)}
            <RelativeTime.Zone {zone}>
                <RelativeTime.ZoneLabel>{label}</RelativeTime.ZoneLabel>
                <RelativeTime.ZoneDate />
                <RelativeTime.ZoneDisplay />    
            </RelativeTime.Zone>
        {/each}
    </RelativeTime.Root>
</div>
