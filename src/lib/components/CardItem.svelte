<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';
	import Image from './Image.svelte';
	import type { TCloudImage } from '../stores';

	export let imgData: TCloudImage;
	export let sizes: string;
	// export let link: string;

	const srcset = new Map();
	const formats = ['jpg', 'webp', 'avif'];

	formats.forEach((format) => {
		srcset.set(format, {
			'400w': `${imgData.url}?fm=${format}&q=60&w=400`,
			'600w': `${imgData.url}?fm=${format}&q=60&w=600`,
			'800w': `${imgData.url}?fm=${format}&q=60&w=800`,
			'1200w': `${imgData.url}?fm=${format}&q=60&w=1200`
		});
	});

	function writeCollection(rawText: string | undefined) {
		if (!rawText) return 'untitled';
		return rawText.replaceAll('-', ' ');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<FlyInBox>
	<div on:click class="flex flex-col gap-4 hover:cursor-pointer">
		<Image
			{sizes}
			clazz="w-full h-auto"
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
