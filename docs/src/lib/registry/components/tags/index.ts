import Tags from "./tags.svelte";
import TagsContent from "./tags-content.svelte";
import TagsEmpty from "./tags-empty.svelte";
import { CommandGroup as TagsGroup } from "$lib/components/ui/command";
import TagsInput from "./tags-input.svelte";
import TagsItem from "./tags-item.svelte";
import TagsList from "./tags-list.svelte";
import TagsTrigger from "./tags-trigger.svelte";
import TagsValue from "./tags-value.svelte";

export {
    Tags,
    TagsContent,
    TagsEmpty,
    TagsGroup,
    TagsInput,
    TagsItem,
    TagsList,
    TagsTrigger,
    TagsValue,

    Tags as Root,
    TagsContent as Content,
    TagsEmpty as Empty,
    TagsGroup as Group,
    TagsInput as Input,
    TagsItem as Item,
    TagsList as List,
    TagsTrigger as Trigger,
    TagsValue as Value
};
