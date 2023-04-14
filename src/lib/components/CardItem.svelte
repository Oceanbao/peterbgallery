<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';
	import Image from './Image.svelte';
	import type { TImageData } from '../stores';

	export let imgData: TImageData;
	export let sizes: string;
	// export let link: string;

	const srcset = new Map();
	const formats = ['jpg', 'webp', 'avif'];

	formats.forEach((format) => {
		srcset.set(format, {
			'200w': `${imgData.url}?fm=jpg&q=60&w=200`,
			'400w': `${imgData.url}?fm=jpg&q=60&w=400`,
			'600w': `${imgData.url}?fm=jpg&q=60&w=600`,
			'800w': `${imgData.url}?fm=jpg&q=60&w=800`
		});
	});

	function writeCollection(rawText: string | undefined) {
		if (!rawText) return 'untitled';
		return rawText.replaceAll('-', ' ');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<FlyInBox>
	<div on:click class="flex flex-col gap-4">
		<Image
			{sizes}
			clazz="w-full aspect-auto"
			alt={imgData.name}
			width={String(imgData.width)}
			height={String(imgData.height)}
			srcsetJpg={srcset.get('jpg')}
			srcsetWebp={srcset.get('webp')}
			srcsetAvif={srcset.get('avif')}
			blurBase64={imgData.blurBase64}
			fetchpriority="high"
		/>
		<div class="description flex flex-col gap-2">
			<p class="font-montserrat text-sm font-thin uppercase text-white">
				{writeCollection(imgData.collection)}
			</p>
			<!-- <p class="lg:text-l font-montserrat text-xs font-light uppercase text-gray-50"> -->
			<!-- 	{imgData.dimension} -->
			<!-- </p> -->
		</div>
	</div></FlyInBox
>
