<script lang="ts">

</script>

export type SandboxCodeEditorProps = CodeEditorProps;

export const SandboxCodeEditor = ({
  showTabs = false,
  ...props
}: SandboxCodeEditorProps): ReactNode => (
  <SandpackCodeEditor showTabs={showTabs} {...props} />
);