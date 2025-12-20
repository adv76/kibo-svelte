<script lang="ts">
    import * as Comparison from "$lib/registry/components/comparison";
</script>

<Comparison.Root
    class="aspect-video"
    onDragEnd={() => console.log("drag end")}
    onDragStart={() => console.log("drag start")}
>
    <Comparison.Item class="bg-red-500" position="left">
        <img
            alt="Placeholder 1"
            class="opacity-50"
            height={1080}
            src="https://placehold.co/1920x1080?random=1"
            width={1920}
        />
    </Comparison.Item>
    <Comparison.Item className="bg-blue-500" position="right">
        <img
            alt="Placeholder 2"
            class="opacity-50"
            height={1440}
            src="https://placehold.co/2560x1440?random=2"
            width={2560}
        />
    </Comparison.Item>
    <Comparison.Handle />
</Comparison.Root>
