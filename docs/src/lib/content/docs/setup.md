---
title: Setup
description: How to install and set up Kibo Svelte components in your project
---

Installing Kibo Svelte is straightforward and can be via the standard shadcn-svelte CLI if you’ve already adopted shadcn’s workflow.

This guide will walk you through the prerequisites and the installation steps, complete with example commands. By the end, you’ll have Kibo Svelte components ready to use in your project.

## Prerequisites

Before installing Kibo Svelte, make sure your environment meets the following requirements:

- [Node.js](https://nodejs.org/en/download/), version 18 or later
- A [Svelte](https://svelte.dev/docs/svelte/getting-started) project, version 18 or later
- [shadcn-svelte](https://shadcn-svelte.com/) installed in your project. In practice, this means you have already initialized shadcn in your project (for example by running `npx shadcn-svelte@latest init` and configuring Tailwind CSS). Kibo Svelte currently supports only the CSS Variables mode of shadcn-svelte for theming.

<Callout type="warning">
Note: If you haven’t installed shadcn-svelte yet, you should do that first. Follow the official shadcn-svelte setup instructions to configure Tailwind CSS and the base components. Kibo Svelte builds on that foundation, so having shadcn in place is required.
</Callout>

<Callout type="info">
  Kibo Svelte currently only supports the CSS Variables version of shadcn-svelte
</Callout>

## Installing Components

You can install Kibo Svelte components using either the Kibo Svelte CLI or the shadcn-svelte CLI. Both achieve the same result: adding the selected component’s code and any needed dependencies to your project. For example, to install the Gantt Chart component, you would run:

<Installer packageName="gantt" />

The CLI will download the component’s code and integrate it into your project’s directory (usually under your components folder). By default, Kibo Svelte components are added to the `@/components/kibo-ui/` directory (or whatever folder you’ve configured in your shadcn components settings).

For instance, the command above will place the Gantt component files in `@/components/kibo-ui/gantt/`. The CLI also ensures that any required dependencies (for example, specific headless libraries a component might need) are installed automatically.

After running the command, you should see a confirmation in your terminal that the files were added. You can then proceed to use the component in your code.

<Callout type="info">
⚡ Fast Installation: Both methods above are very fast – typically taking only a few seconds. You don’t need to leave your editor or manually copy-paste any code. After the command finishes, everything is ready to go.
</Callout>
