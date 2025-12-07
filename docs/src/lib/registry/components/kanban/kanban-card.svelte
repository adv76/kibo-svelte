<script lang="ts" generics="T extends KanbanItemProps = KanbanItemProps">
    import { Card } from "$lib/components/ui/card";
    import type { Snippet } from "svelte";
    import type { KanbanItemProps } from "./types";
    import { cn } from "$lib/utils";
    import { useSortable } from "@dnd-kit-svelte/sortable";
    import { CSS, styleObjectToString } from '@dnd-kit-svelte/utilities';
    import { getContext } from "./kanban-context.svelte";


    type KanbanCardProps<T extends KanbanItemProps = KanbanItemProps> = T & {
        class?: string;
        children?: Snippet;
    };

    let {
        id,
        index,
        name,
        class: className,
        children
    }: KanbanCardProps<T> = $props();
    
    const {
        attributes,
        listeners,
        node,
        transition,
        transform,
        isDragging,
        isSorting
    } = useSortable({
        id: () => id
    });

    const ctx = getContext();

    //const { activeCardId } = useContext(KanbanContext) as KanbanContextProps;

    // const style = {
    //     transition,
    //     transform: CSS.Transform.toString(transform),
    // };
    const style = $derived(
		styleObjectToString({
			transform: CSS.Transform.toString(transform.current),
			transition: isSorting.current ? transition.current : undefined,
			zIndex: isDragging.current ? 1 : undefined,
		})
	);

</script>
<!--style={style} {...listeners} {...attributes}-->
<div bind:this={node.current} {style} {...listeners.current} {...attributes.current}>
    <Card
        class={cn(
            "cursor-grab gap-4 rounded-md p-3 shadow-sm",
            isDragging.current && "pointer-events-none cursor-grabbing opacity-30",
            className
        )}
    >
        {#if children}
            {@render children()}
        {:else}
            <p class="m-0 font-medium text-sm">{name}</p>    
        {/if}
    </Card>
</div>

<!-- {#if activeCardId === id}
    <t.In>
        <Card
            class={cn(
                "cursor-grab gap-4 rounded-md p-3 shadow-sm ring-2 ring-primary",
                isDragging && "cursor-grabbing",
                className
            )}
        >
            {#if children}
                {@render children()}
            {:else}
                <p class="m-0 font-medium text-sm">{name}</p>    
            {/if}
        </Card>
    </t.In>
{/if} -->
