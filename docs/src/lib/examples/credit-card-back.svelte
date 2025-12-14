<script lang="ts">
    import * as CreditCard from "$lib/registry/components/credit-card";
</script>

<CreditCard.Root>
    <CreditCard.Back class="bg-[#9EE672] text-black">
        <CreditCard.MagStripe />
        <CreditCard.Number class="absolute bottom-0 left-0">
            0123 4567 8901 2345
        </CreditCard.Number>
        <div class="absolute @xs:bottom-12 bottom-8 flex w-full @xs:flex-row flex-col @xs:justify-between gap-4">
            <CreditCard.Name class="flex-1">John R. Doe</CreditCard.Name>
            <div class="flex flex-1 @xs:justify-between gap-4">
                <CreditCard.Expiry>01/24</CreditCard.Expiry>
                <CreditCard.Cvv>123</CreditCard.Cvv>
            </div>
      </div>
    </CreditCard.Back>
</CreditCard.Root>
