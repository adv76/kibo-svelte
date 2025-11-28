<script lang="ts">
    import * as RelativeTime from "$lib/registry/components/relative-time";

    const timezones = [
        { label: "EST", zone: "America/New_York" },
        { label: "GMT", zone: "Europe/London" },
        { label: "JST", zone: "Asia/Tokyo" },
    ];
</script>

<div class="rounded-md border bg-background p-4">
    <RelativeTime.Root timeFormatOptions={{ hour: "2-digit", minute: "2-digit" }}>
        {#each timezones as { zone, label }(zone)}
            <RelativeTime.Zone {zone}>
                <RelativeTime.ZoneLabel>{label}</RelativeTime.ZoneLabel>
                <RelativeTime.ZoneDate />
                <RelativeTime.ZoneDisplay />    
            </RelativeTime.Zone>
        {/each}
    </RelativeTime.Root>
</div>
