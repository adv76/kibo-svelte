<script lang="ts">
    import * as MiniCalendar from "$lib/registry/components/mini-calendar";

    let selectedDate = $state<Date>();
</script>

<div class="space-y-4">
    <MiniCalendar.Root bind:value={selectedDate}>
        <MiniCalendar.Navigation direction="prev" />
        <MiniCalendar.Days>
            {#snippet child({ date })}
                <MiniCalendar.Day {date} />
            {/snippet}
        </MiniCalendar.Days>
        <MiniCalendar.Navigation direction="next" />
    </MiniCalendar.Root>

    {#if selectedDate}
        <p class="text-muted-foreground text-sm">
            Selected:
            {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </p>
    {/if}
</div>
