<script lang="ts">
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
        <ContributionGraph.TotalCount />
        <ContributionGraph.Legend />
    </ContributionGraph.Footer>
</ContributionGraph.Root>
