<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';
	import Image from './Image.svelte';
	import type { TImageData } from '../stores';

	export let imgData: TImageData;
	export let sizes: string;
	export let title = 'mona lisa';
	export let dimension = '38 x 38';
	// export let link: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<FlyInBox>
	<div on:click class="flex aspect-auto flex-col">
		<Image
			{sizes}
			clazz="aspect-auto"
			alt={imgData.name}
			srcsetJpg={imgData.srcset.jpg}
			srcsetWebp={imgData.srcset.webp}
			srcsetAvif={imgData.srcset.avif}
			blurBase64={imgData.blurBase64}
			fetchpriority="high"
		/>
		<div class="description flex flex-col gap-2">
			<p class="font-montserrat text-sm font-thin uppercase text-gray-50 lg:text-xl">
				{title}
			</p>
			<p class="lg:text-l font-montserrat text-xs font-light uppercase text-gray-50">
				{dimension}
			</p>
		</div>
	</div></FlyInBox
>
