<script lang="ts">
	import type { TImageData } from '../stores';
	import Image from '$lib/components/Image.svelte';

	export let imgData: TImageData;
</script>

<div class="flex flex-col">
	<Image
		clazz="aspect-auto mx-4 mt-16 mb-20"
		alt={imgData.name}
		srcsetJpg={imgData.srcset.jpg}
		srcsetWebp={imgData.srcset.webp}
		srcsetAvif={imgData.srcset.avif}
		blurBase64={imgData.blurBase64}
		fetchpriority="low"
		loading="lazy"
	/>
	<div class="mx-4 mb-24 flex flex-col">
		<h1 class="title font-montserrat text-3xl font-light">TITLE</h1>
		<hr class="mt-4 mb-6 h-0.5 w-full bg-gray-500" />
		<p>{imgData.technique}</p>
		<p>{imgData.dimension}</p>
	</div>
</div>

<style>
</style>
