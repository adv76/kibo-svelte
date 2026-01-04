<script lang="ts">

</script>

export type SandboxTabsContentProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export const SandboxTabsContent = ({
  className,
  value,
  ...props
}: SandboxTabsContentProps): ReactNode => {
  const { selectedTab } = useSandboxTabsContext();

  return (
    <div
      aria-hidden={selectedTab !== value}
      className={cn(
        "flex-1 overflow-y-auto ring-offset-background transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selectedTab === value
          ? "h-auto w-auto opacity-100"
          : "pointer-events-none absolute h-0 w-0 opacity-0",
        className
      )}
      data-state={selectedTab === value ? "active" : "inactive"}
      role="tabpanel"
      {...props}
    />
  );
};
