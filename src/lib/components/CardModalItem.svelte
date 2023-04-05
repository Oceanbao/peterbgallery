<script lang="ts">
	import type { TItem } from "../stores";

  export let modalData: TItem
</script>

	<div class="flex flex-col">
		<img alt="someimage1" src={`/gallery/${modalData.filename}`} class="mx-4 mt-16 mb-20 aspect-auto" loading="lazy" />
  <div class="flex flex-col mx-4 mb-24">
		<h1 class="title font-montserrat text-3xl font-light">TITLE</h1>
    <hr class="h-0.5 w-full bg-gray-500 mt-4 mb-6"/>
		<p>{modalData.info}</p>
		<p>{modalData.width} x {modalData.height}</p>
  </div>
	</div>

  <style>
</style>
