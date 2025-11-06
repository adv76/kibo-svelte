import type { BundledLanguage } from "shiki";

import CodeBlock from "./code-block.svelte";
import CodeBlockBody from "./code-block-body.svelte";
import CodeBlockContent from "./code-block-content.svelte";
import CodeBlockCopyButton from "./code-block-copy-button.svelte";
import CodeBlockFallback from "./code-block-fallback.svelte";
import CodeBlockFilename from "./code-block-filename.svelte";
import CodeBlockFiles from "./code-block-files.svelte";
import CodeBlockHeader from "./code-block-header.svelte";
import CodeBlockItem from "./code-block-item.svelte";
import CodeBlockSelect from "./code-block-select.svelte";
import CodeBlockSelectContent from "./code-block-select-content.svelte";
import CodeBlockSelectItem from "./code-block-select-item.svelte";
import CodeBlockSelectTrigger from "./code-block-select-trigger.svelte";
import CodeBlockSelectValue from "./code-block-select-value.svelte";


export {
    type BundledLanguage,

    CodeBlock,
    CodeBlockBody,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockFallback,
    CodeBlockFilename,
    CodeBlockFiles,
    CodeBlockHeader,
    CodeBlockItem,
    CodeBlockSelect,
    CodeBlockSelectContent,
    CodeBlockSelectItem,
    CodeBlockSelectTrigger,
    CodeBlockSelectValue,
    
    CodeBlock as Root,
    CodeBlockBody as Body,
    CodeBlockContent as Content,
    CodeBlockCopyButton as CopyButton,
    CodeBlockFallback as Fallback,
    CodeBlockFilename as Filename,
    CodeBlockFiles as Files,
    CodeBlockHeader as Header,
    CodeBlockItem as Item,
    CodeBlockSelect as Select,
    CodeBlockSelectContent as SelectContent,
    CodeBlockSelectItem as SelectItem,
    CodeBlockSelectTrigger as SelectTrigger,
    CodeBlockSelectValue as SelectValue
};
