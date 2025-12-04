---
title: Image Zoom
description: Image zoom is a component that allows you to zoom in on an image.
icon: ImageUpscale
dependencies:
  - https://github.com/stabldev/svelte-medium-image-zoom
installer: image-zoom
---

<script>
  import Preview from "$lib/components/internal/preview/preview.svelte";
</script>

## Features

- Zoom in on images with a click or tap
- Customizable zoom button appearance and position
- Smooth transitions for zooming in and out
- Customizable backdrop with blur effect
- Support for both controlled and uncontrolled zoom states
- Accessible keyboard navigation
- Touch-friendly for mobile devices
- Customizable styling through className props
- Reduced motion support for animations
- Works with any image, SVG, or element with role="img"

## Examples

### Custom backdrop

<Preview path="image-zoom-background" />

### Custom margin

<Preview path="image-zoom-margin" />
