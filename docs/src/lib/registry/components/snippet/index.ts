import { TabsList } from "$lib/components/ui/tabs";
import Snippet from "./snippet.svelte";
import SnippetCopyButton from "./snippet-copy-button.svelte";
import SnippetHeader from "./snippet-header.svelte";
import SnippetTabsContent from "./snippet-tabs-content.svelte";
import SnippetTabsTrigger from "./snippet-tabs-trigger.svelte";

export {
    Snippet,
    SnippetCopyButton,
    SnippetHeader,
    SnippetTabsContent,
    TabsList as SnippetTabsList,
    SnippetTabsTrigger,

    Snippet as Root,
    SnippetCopyButton as CopyButton,
    SnippetHeader as Header,
    SnippetTabsContent as TabsContent,
    TabsList,
    SnippetTabsTrigger as TabsTrigger
};
