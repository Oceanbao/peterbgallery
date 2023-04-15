<script lang="ts">
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import { landingImagesPortrait$, landingImagesLandscape$, type TLocalImage } from '$lib/stores';

	let screenWidth: number;
	let screenHeight: number;
	let portrait: boolean;
	let images: TLocalImage[] = [];

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

<div class="relative top-0 left-0 h-screen w-screen">
	<Image
		clazzBox="absolute"
		styleeBox={`width: 100%; height: 100%; opacity: ${
			showA ? 1 : 0
		}; transition: opacity 800ms ease-in-out`}
		clazz="h-full w-full object-cover lg:fixed"
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
		clazzBox="absolute"
		styleeBox={`width: 100%; height: 100%; opacity: ${
			showB ? 1 : 0
		}; transition: opacity 800ms ease-in-out`}
		clazz="h-full w-full object-cover lg:fixed"
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
