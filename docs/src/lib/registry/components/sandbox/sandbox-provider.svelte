<script lang="ts">

</script>

export type SandboxProviderProps = SandpackProviderProps;

export const SandboxProvider = ({
  className,
  ...props
}: SandpackProviderProps): ReactNode => (
  <div className={cn("size-full", className)}>
    <SandpackProvider className="!size-full !max-h-none" {...props} />
  </div>
);