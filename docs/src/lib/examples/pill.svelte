<script lang="ts">
    import * as Pill from "$lib/registry/components/pill";
    import { CheckCircle, Users, X } from "@lucide/svelte";

</script>

<div class="flex flex-wrap items-center justify-center gap-2">
    <Pill.Root>
        <Pill.Avatar
            fallback="HB"
            src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
        />
        @haydenbleasel
    </Pill.Root>
    <Pill.Root>
        <Pill.Status>
            <CheckCircle class="text-emerald-500" size={12} />
            Passed
        </Pill.Status>
        Approval Status
    </Pill.Root>
    <Pill.Root>
        #kibo-ui
        <Pill.Button size="icon" variant="ghost">
            <X size={12} />
        </Pill.Button>
    </Pill.Root>
    <Pill.Root>
        <Pill.Indicator pulse variant="success" />
        Active
    </Pill.Root>
    <Pill.Root>
        <Pill.Indicator variant="error" />
        Error
    </Pill.Root>
    <Pill.Root>
        <Pill.Delta delta={10} />
        Up 10%
    </Pill.Root>
    <Pill.Root>
        <Pill.Delta delta={-5} />
        Down 5%
    </Pill.Root>
    <Pill.Root>
        <Pill.Delta delta={0} />
        No change
    </Pill.Root>
    <Pill.Root>
        <Pill.Icon icon={Users} />
        17 users
    </Pill.Root>
    <Pill.Root>
        <Pill.AvatarGroup>
            <Pill.Avatar
                fallback="HB"
                src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
            />
            <Pill.Avatar
                fallback="SC"
                src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
            />
            <Pill.Avatar
                fallback="LR"
                src="https://pbs.twimg.com/profile_images/1862717563311968256/xfgt1L9l_400x400.jpg"
            />
        </Pill.AvatarGroup>
        Loved by millions
    </Pill.Root>
</div>
