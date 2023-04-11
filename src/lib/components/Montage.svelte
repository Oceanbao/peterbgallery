<script lang="ts">
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import { landingImagesPortrait$, landingImagesLandscape$, type TImageData } from '$lib/stores';

	let screenWidth: number;
	let screenHeight: number;
	let portrait: boolean;
	let images: TImageData[] = [];

	onMount(() => {
		portrait = screenWidth / screenHeight < 0.8;
	});

	$: if (portrait) {
		images = $landingImagesPortrait$;
	} else {
		images = $landingImagesLandscape$;
	}

	let showA = true;
	$: showB = !showA;

	let indexA = 0;
	let indexB = 1;

	$: srcA = images[indexA];
	$: srcB = images[indexB];

	function toggleSwtich() {
		setInterval(() => {
			showA = !showA;
			setTimeout(() => {
				if (showA) {
					indexB = indexA === images.length - 1 ? 0 : indexA + 1;
				} else {
					indexA = indexB === images.length - 1 ? 0 : indexB + 1;
				}
			}, 1000);
		}, 4000);
	}

	toggleSwtich();
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div class="montage top-0 left-0  h-screen w-screen">
	<Image
		stylee={`opacity: ${showA ? 1 : 0};`}
		clazz="absolute h-full w-full object-cover lg:fixed [transition:opacity_800ms_ease-in-out]"
		alt={srcA.name}
		width={String(srcA.width)}
		height={String(srcA.height)}
		srcsetJpg={srcA.srcset.jpg}
		srcsetWebp={srcA.srcset.webp}
		srcsetAvif={srcA.srcset.avif}
		blurBase64={srcA.blurBase64}
		fetchpriority="high"
	/>
	<Image
		stylee={`opacity: ${showB ? 1 : 0};`}
		clazz="absolute h-full w-full object-cover lg:fixed [transition:opacity_800ms_ease-in-out]"
		alt={srcB.name}
		width={String(srcB.width)}
		height={String(srcB.height)}
		srcsetJpg={srcB.srcset.jpg}
		srcsetWebp={srcB.srcset.webp}
		srcsetAvif={srcB.srcset.avif}
		blurBase64={srcB.blurBase64}
		fetchpriority="high"
	/>
</div>
