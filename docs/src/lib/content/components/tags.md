---
title: Tags
description: Tags are a way to apply multiple labels to an item.
icon: Tags
installer: tags
---

<script>
  import Preview from "$lib/components/internal/preview/preview.svelte";
</script>

## Features

- Built-in search input to filter through tags
- Supports both controlled and uncontrolled usage
- Fully customizable through className props
- Automatically adjusts width based on parent container
- Optional remove button for selected tags
- Full keyboard navigation support through Command component
- Shared state management through TagsContext

## Examples

### Create a tag

<Preview path="tags-create" />

### Filter available tags

<Preview path="tags-filter" />
