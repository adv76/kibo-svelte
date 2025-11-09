<script lang="ts">
    import * as ContributionGraph from "$lib/registry/components/contribution-graph";
    import * as Tooltip from "$lib/components/ui/tooltip";
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

<Tooltip.Provider>
    <ContributionGraph.Root {data}>
        <ContributionGraph.Calendar>
            {#snippet block({ activity, dayIndex, weekIndex})}
                <Tooltip.Root>
                    <Tooltip.Trigger>
                        {#snippet child({ props })}
                            <g {...props}>
                                <ContributionGraph.Block
                                    {activity}
                                    class="cursor-pointer"
                                    {dayIndex}
                                    {weekIndex}
                                />
                            </g>
                        {/snippet}
                    </Tooltip.Trigger>
                    <Tooltip.Content>
                        <p class="font-semibold">{activity.date}</p>
                        <p>{activity.count} contributions</p>
                    </Tooltip.Content>
                </Tooltip.Root>
            {/snippet}
        </ContributionGraph.Calendar>
        <ContributionGraph.Footer />
    </ContributionGraph.Root>
</Tooltip.Provider>
