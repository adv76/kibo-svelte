<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as MiniCalendar from "$lib/registry/components/mini-calendar";
    import { ArrowLeftIcon, ArrowRightIcon } from "@lucide/svelte";
</script>

<MiniCalendar.Root class="bg-card p-4 shadow-lg">
    <div class="flex items-center gap-4">
        <MiniCalendar.Navigation direction="prev">
            {#snippet child({ props })}
                <Button size="icon" variant="outline" {...props}>
                    <ArrowLeftIcon class="size-4" />
                </Button>
            {/snippet}
        </MiniCalendar.Navigation>

        <MiniCalendar.Days class="gap-2">
            {#snippet child({ date })}
                <MiniCalendar.Day {date} />
            {/snippet}
        </MiniCalendar.Days>

        <MiniCalendar.Navigation direction="next">
            {#snippet child({ props })}
                <Button size="icon" variant="outline" {...props}>
                    <ArrowRightIcon class="size-4" />
                </Button>
            {/snippet}
        </MiniCalendar.Navigation>
    </div>
</MiniCalendar.Root>
