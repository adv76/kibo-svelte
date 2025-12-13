<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import * as Rating from "$lib/registry/components/rating";

    let value = $state(3)
</script>

<Rating.Root bind:value max={5}>
    {#snippet child({ index })}
        <Rating.Button {index} />
    {/snippet}
</Rating.Root>

<Input
    class="w-32 bg-background"
    max={5}
    min={0}
    type="number"
    bind:value
/>



<!-- 
"use client";

import { Rating, RatingButton } from "@repo/rating";
import { Input } from "@repo/shadcn-ui/components/ui/input";
import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState(3);

  return (
    <>
      <Rating onValueChange={setValue} value={value}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton key={index} />
        ))}
      </Rating>
      <Input
        className="w-32 bg-background"
        max={5}
        min={0}
        onChange={(e) => setValue(Number(e.target.value))}
        type="number"
        value={value}
      />
    </>
  );
};

export default Example; -->