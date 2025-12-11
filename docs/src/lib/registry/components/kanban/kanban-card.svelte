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

    let isOverlay = false;

    $effect(() => {
        console.log("effect");
        if (ctx.activeCardId == id) {
            ctx.activeCardSnippet = overlay;
            isOverlay = true;
            console.log("set snippet")
        } else if (isOverlay) { // only unset if this card was the overlay card
            ctx.activeCardSnippet = undefined;
            isOverlay = false;
            console.log("unset snippet")
        }
    })

    const style = $derived(
		styleObjectToString({
            transition: transition.current,
			transform: CSS.Transform.toString(transform.current),
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

{#snippet overlay()}
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
{/snippet}
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


