<script lang="ts">

</script>

export type SandboxTabsListProps = HTMLAttributes<HTMLDivElement>;

export const SandboxTabsList = ({
  className,
  ...props
}: SandboxTabsListProps): ReactNode => (
  <div
    className={cn(
      "inline-flex w-full shrink-0 items-center justify-start border-b bg-secondary p-2 text-muted-foreground",
      className
    )}
    role="tablist"
    {...props}
  />
);
