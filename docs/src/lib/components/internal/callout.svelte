<script lang="ts">
    let {
        type,
        children
    } = $props();
</script>

<div>
    {@render children?.()}
</div>