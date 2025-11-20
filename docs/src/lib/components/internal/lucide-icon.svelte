<script>
    import * as icons from '@lucide/svelte';
    let { name, ...props } = $props();

    
    // @ts-ignore TS Shut Up!
    const Icon = icons[name];
</script>

<Icon {...props} />
