<script lang="ts">
    let { data } = $props();
</script>

<div class="bg-background flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-4">
        <data.component />
    </div>
</div>
