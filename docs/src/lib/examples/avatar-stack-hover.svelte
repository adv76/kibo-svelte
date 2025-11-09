<script lang="ts">
    import * as AvatarStack from "$lib/registry/components/avatar-stack";
    import * as Avatar from "$lib/components/ui/avatar";
</script>

<AvatarStack.Root animate>
    <AvatarStack.Avatar>
        <Avatar.Root>
            <Avatar.Image src="https://github.com/haydenbleasel.png" />
            <Avatar.Fallback>HB</Avatar.Fallback>
        </Avatar.Root>
    </AvatarStack.Avatar>
    <AvatarStack.Avatar>
        <Avatar.Root>
            <Avatar.Image src="https://github.com/shadcn.png" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </AvatarStack.Avatar>
    <AvatarStack.Avatar>
        <Avatar.Root>
            <Avatar.Image src="https://github.com/leerob.png" />
            <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar.Root>
    </AvatarStack.Avatar>
    <AvatarStack.Avatar>
        <Avatar.Root>
            <Avatar.Image src="https://github.com/serafimcloud.png" />
            <Avatar.Fallback>SC</Avatar.Fallback>
        </Avatar.Root>
    </AvatarStack.Avatar>
</AvatarStack.Root>
