---
title: Usage
description: Learn how to use Kibo SVelte components in your application.
---

Once a Kibo Svelte component is installed, you can import it and use it in your application like any other Svelte component. The components are added as part of your codebase (not hidden in a library), so the usage feels very natural.

## Example

Let’s say you just added an Announcement component (a simple dismissible banner for notifications). You might use it as follows:

```svelte title="Hero.svelte"
<script lang="ts">
  import * as Announcement from "$lib/registry/components/announcement";
  import { ArrowUpRight } from "@lucide/svelte";
</script>

<Announcement.Root>
  <Announcement.Tag>Latest update</Announcement.Tag>
    <Announcement.Title>
      New feature added
      <ArrowUpRight class="shrink-0 text-muted-foreground" size={16} />
  </Announcement.Title>
</Announcement.Root>
```

In the example above, we import the Announcement components from our Kibo UI directory and include it in our script section aliased as `Announcement`. Then, we compose the component with the `Announcement.Tag` and `Announcement.Title` subcomponents. You can style or configure the component just as you would if you wrote it yourself – since the code lives in your project, you can even open the component file to see how it works or make custom modifications.

Feel free to add as many Kibo Svelte components as you need. Because components are added on-demand, you’re not including code for features you aren’t using. This keeps your app lean. Each component is isolated, so adding one won’t bloat another – yet they all share the same design tokens (colors, fonts, etc.) from shadcn’s theme.

## Extensibility

All Kibo Svelte components take as many primitive attributes as possible. For example, the `Announcement  Tag` component extends `HTMLAttributes<HTMLDivElement>`, so you can pass any props that a `div` supports. This makes it easy to extend the component with your own styles or functionality.

## Customization

After installation, no additional setup is needed. The component’s styles (Tailwind CSS classes) and scripts are already integrated. You can start interacting with the component in your app immediately.
