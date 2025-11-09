<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import * as ContributionGraph from "$lib/registry/components/contribution-graph";
    import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";

    const maxCount = 20;
    const maxLevel = 4;
    const now = new Date();
    const days = eachDayOfInterval({
        start: startOfYear(now),
        end: endOfYear(now),
    });

    const data = days.map((date) => {
        const c = Math.round(
            Math.random() * maxCount - Math.random() * (0.8 * maxCount)
        );
        const count = Math.max(0, c);
        const level = Math.ceil((count / maxCount) * maxLevel);

        return {
            date: formatISO(date, { representation: "date" }),
            count,
            level,
        };
    });
</script>

<ContributionGraph.Root {data}>
    <ContributionGraph.Calendar>
        {#snippet block({ activity, dayIndex, weekIndex})}
            <ContributionGraph.Block
                {activity}
                {dayIndex}
                {weekIndex}
            />
        {/snippet}
    </ContributionGraph.Calendar>
    <ContributionGraph.Footer>
        <ContributionGraph.TotalCount>
            {#snippet child({ totalCount, year })}
                <div class="flex items-center gap-2">
                    <span class="text-muted-foreground text-sm">Year {year}:</span>
                    <Badge variant="secondary">
                        {totalCount.toLocaleString()} contributions
                    </Badge>
                </div>
            {/snippet}
        </ContributionGraph.TotalCount>
        <ContributionGraph.Legend>
            {#snippet legendLevel(level)}
                {@const legendClass = level === 0
                    ? "bg-muted"
                    : level === 1
                        ? "bg-emerald-200 dark:bg-emerald-900"
                        : level === 2
                            ? "bg-emerald-400 dark:bg-emerald-700"
                            : level === 3
                                ? "bg-emerald-600 dark:bg-emerald-500"
                                : level === 4
                                    ? "bg-emerald-800 dark:bg-emerald-300"
                                    : ""
                }
                <div
                    class="group relative flex h-3 w-3 items-center justify-center"
                    data-level={level}
                >
                    <div class="h-full w-full rounded-sm border border-border {legendClass}"></div>
                    <span class="-top-8 absolute hidden rounded bg-popover px-2 py-1 text-popover-foreground text-xs shadow-md group-hover:block">
                        Level {level}
                    </span>
                </div>
            {/snippet}
      </ContributionGraph.Legend>
    </ContributionGraph.Footer>
</ContributionGraph.Root>
