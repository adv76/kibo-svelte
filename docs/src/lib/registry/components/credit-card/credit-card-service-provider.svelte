<script lang="ts">
    import { cn } from "$lib/utils";

    let {
        type = "Visa",
        format,
        class: className,
        children
    } = $props();
</script>

{#if children}
    <div
        class={cn(
            "absolute right-0 bottom-0",
            "max-h-1/3 max-w-1/3",
            className
        )}
    >
        {@render children()}
    </div>
{:else}

{/if}

<!-- export type CreditCardServiceProviderProps = ComponentProps<typeof PaymentIcon>;

export const CreditCardServiceProvider = ({
  className,
  children,
  type = "Visa",
  ...props
}: CreditCardServiceProviderProps) => {
  if (children) {
    return (
      <div
        className={cn(
          "absolute right-0 bottom-0",
          "max-h-1/3 max-w-1/3",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <PaymentIcon
      className={cn(
        "absolute right-0 bottom-0",
        "max-h-1/3 max-w-1/3",
        className
      )}
      type={type}
      {...props}
    />
  );
}; -->