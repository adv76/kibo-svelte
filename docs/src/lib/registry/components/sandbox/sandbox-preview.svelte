<script lang="ts">

</script>


export type SandboxPreviewProps = PreviewProps & {
  className?: string;
};

export const SandboxPreview = ({
  className,
  showOpenInCodeSandbox = false,
  ...props
}: SandboxPreviewProps): ReactNode => (
  <SandpackPreview
    className={cn("h-full", className)}
    showOpenInCodeSandbox={showOpenInCodeSandbox}
    {...props}
  />
); 