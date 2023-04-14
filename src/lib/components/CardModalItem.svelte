<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { TCloudImage } from '../stores';
	import Image from '$lib/components/Image.svelte';

	export let modalImages: TCloudImage[];

	let shownIndex = 0;

	function getSrcSet(imgData: TCloudImage) {
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
		return Object.fromEntries(srcset);
	}

	const srcSet = modalImages.map((item) => getSrcSet(item));

	// const maxHeight = modalImages
	// 	.map((item) => item.height)
	// 	.sort((a, b) => (a > b ? -1 : a === b ? 0 : 1))[0];

	function writeCollection(rawText: string | undefined) {
		if (!rawText) return 'untitled';
		return rawText.replaceAll('-', ' ');
	}

	function writeDimension(rawText: string | undefined) {
		if (!rawText) return 'n/a';
		return rawText.replace('x', ' x ');
	}

	function selectImage(idx: number) {
		shownIndex = idx;
	}
</script>

<div
	class="grid h-full w-full content-center gap-4 px-4 pt-24 md:max-w-2xl md:px-8 lg:max-w-4xl lg:px-16 lg:pb-12"
>
	<div class="w-full">
		<div class="relative mb-4 aspect-[4/5] w-full">
			{#key shownIndex}
				<div class="absolute inset-0 h-full w-full" transition:fade>
					<Image
						clazz="object-cover object-top w-full h-full aspect-auto"
						alt={modalImages[shownIndex].name}
						width={String(modalImages[shownIndex].width)}
						height={String(modalImages[shownIndex].height)}
						srcsetJpg={srcSet[shownIndex].jpg}
						srcsetWebp={srcSet[shownIndex].webp}
						srcsetAvif={srcSet[shownIndex].avif}
						blurBase64={modalImages[shownIndex].blurBase64}
						fetchpriority="low"
						loading="lazy"
					/>
				</div>
			{/key}
		</div>

		<div class="relative w-full">
			<ul class="flex flex-wrap gap-2">
				{#each modalImages as imgData, idx}
					<li class="h-16 w-16">
						<img
							on:click={() => selectImage(idx)}
							on:keypress={() => selectImage(idx)}
							class={`aspect-square object-cover ${
								shownIndex === idx ? 'opacity-100' : 'opacity-40'
							}`}
							width={imgData.width}
							height={imgData.height}
							alt={imgData.name}
							src={`${imgData.url}?auto=format&q=50&w=64`}
							style={`background: url(${imgData.blurBase64}) no-repeat center/cover;`}
							loading="lazy"
							decoding="async"
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="relative mb-8 flex-auto">
		<h1 class="title font-montserrat text-3xl font-light uppercase">
			{writeCollection(modalImages[shownIndex].collection)}
		</h1>
		<hr class="mt-4 mb-6 h-0.5 w-full bg-gray-500" />
		<p>{writeDimension(modalImages[shownIndex].dimension)} cm</p>
	</div>
</div>
