<script lang="ts">
    import * as MiniCalendar from "$lib/registry/components/mini-calendar"
</script>

<MiniCalendar.Root>
    <MiniCalendar.Navigation direction="prev" />
    <MiniCalendar.Days>
        {#snippet child({ date })}
            <MiniCalendar.Day {date} />
        {/snippet}
    </MiniCalendar.Days>
    <MiniCalendar.Navigation direction="next" />
</MiniCalendar.Root>
