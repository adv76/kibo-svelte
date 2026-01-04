<script lang="ts">

</script>

export type SandboxConsoleProps = Parameters<typeof SandpackConsole>[0];

export const SandboxConsole = ({
  className,
  ...props
}: SandboxConsoleProps): ReactNode => (
  <SandpackConsole className={cn("h-full", className)} {...props} />
);

