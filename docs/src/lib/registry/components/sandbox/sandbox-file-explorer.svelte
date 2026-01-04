<script lang="ts">

</script>

export type SandboxFileExplorerProps = ComponentProps<
  typeof SandpackFileExplorer
>;

export const SandboxFileExplorer = ({
  autoHiddenFiles = true,
  className,
  ...props
}: SandboxFileExplorerProps): ReactNode => (
  <SandpackFileExplorer
    autoHiddenFiles={autoHiddenFiles}
    className={cn("h-full", className)}
    {...props}
  />
);