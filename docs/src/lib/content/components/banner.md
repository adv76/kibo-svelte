---
title: Banner
description: A banner is a full-width component that can be used to show a message and action to the user.
icon: CircleAlert
dependencies:
  - https://lucide.dev/
installer: banner
---

<script>
  import Preview from "$lib/components/internal/preview/preview.svelte";
</script>

## Features

- Controlled and uncontrolled visibility state
- Customizable close handler
- Optional inset variant with rounded corners
- Composable API with Icon, Title, Action and Close components
- Customizable via className prop
- Adapts to primary color tokens
## Examples

### Inset

<Preview path="banner-inset" />

### Different primary colors

<Preview path="banner-themes" />
