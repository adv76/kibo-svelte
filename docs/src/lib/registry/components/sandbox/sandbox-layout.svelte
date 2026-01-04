<script lang="ts">


</script>

export type SandboxLayoutProps = SandpackLayoutProps;

export const SandboxLayout = ({
  className,
  ...props
}: SandpackLayoutProps): ReactNode => (
  <SandpackLayout
    className={cn(
      "!rounded-none !border-none !bg-transparent !h-full",
      className
    )}
    {...props}
  />
);