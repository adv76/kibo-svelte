---
title: Introduction
description: What is Kibo Svelte and why you should use it.
---

## What is Kibo Svelte?

Kibo Svelte is a port of the [Kibo UI](https://kibo-ui.com) component library and custom registry built on top of [shadcn-svelte](https://shadcn-svelte.com/). Its goal is to help developers build richer UIs faster by providing pre-built components like tables, file dropzones and AI chat primitives. Unlike simple style libraries, Kibo Svelte delivers fully composable and accessible components that come with real functionality, not just pre-styled code. It’s open source and tailored for modern frontend stacks (Svelte, SvelteKit, Tailwind CSS), making it easy to integrate into your existing projects.

## How does it relate to shadcn-svelte?

Kibo Svelte provides a collection of composable, accessible, and open source Svelte components designed for use with shadcn-svelte. It acts as a companion to shadcn-sveltes’s base components, using the same Tailwind CSS variable theming to work neatly with shadcn’s primitives. In practice, you can think of Kibo Svelte as a natural extension of shadcn-svelte, providing components that cover a wider range of use-cases and are designed to reduce boilerplate code without sacrificing flexibility or responsive design.

While shadcn-svelte provides foundational primitives (wrapping low-level Bits UI components), Kibo Svelte offers a more comprehensive library that goes further. Kibo components often wrap more complex logic from additional headless libraries, providing a seamless experience for features that would otherwise require custom implementation. In short, Kibo Svelte extends the shadcn approach to deliver higher-level components (like calendars, rich text editors, drag-and-drop, etc.) that integrate smoothly with the rest of your stack.

Kibo Svelte also provides blocks, similar to those of shadcn-svelte. Blocks are pre-built components that are designed to be used as building blocks for entire sections of your application, like login pages, dashboards, and more. They are a way to quickly add complex functionality to your application.

## Who is Kibo Svelte for?

If you’re building a Svelte application and want to accelerate development without sacrificing quality or extensibility, Kibo Svelte is for you. It provides ready-made components that can be composed and tweaked to fit your needs, which is ideal for startups and agile teams that need to ship features quickly. Instead of spending days building a complex date picker, rich text editor, or file uploader, you can add one from Kibo Svelte in minutes and focus on your app’s unique logic.

Kibo Svelte components are also useful for building your own design system. Because the components are un-opinionated in styling (beyond Tailwind utility classes) and fully open source, you can adjust the look and feel of each component to match your brand. The library’s philosophy of composability means you can use Kibo’s components as a starting point and extend them. This is great for creating a consistent, accessible design system without starting from scratch.

## Open Source and Community

Kibo Svelte is completely open source (MIT licensed) and is hosted on GitHub. Being open source means you can inspect the code, understand how each component works, and even modify anything to suit your project’s needs. We actively welcome community contributions, from bug fixes and documentation improvements to entirely new components. If you encounter any issues or have ideas for enhancements, you can file issues or pull requests on the repository. Contributions are welcome – check out the [Contributing guide](/docs/how-to-contribute) to see how to get involved. By building Kibo Svelte in the open, we aim to foster a community where frontend developers and designers collaborate to create the best possible UI toolkit for Svelte apps.
