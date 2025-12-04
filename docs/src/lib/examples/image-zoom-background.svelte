<script lang="ts">
    import { ImageZoom } from "$lib/registry/components/image-zoom";
</script>

<ImageZoom backdropClassName={'[&_[data-smiz-modal-overlay="visible"]]:bg-black/80'}>
    <img
      alt="placeholder"
      class="h-auto w-96"
      height={800}
      src="https://placehold.co/1200x800"
      width={1200}
    />
</ImageZoom>
