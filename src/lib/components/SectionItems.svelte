<script lang="ts">
	import ModalItem from './ModalItem.svelte';
	import CardItem from './CardItem.svelte';
	import CardModalItem from './CardModalItem.svelte';
	import { breakpoints } from '../breakpoints';
	import { type TImageData, landingImagesPortrait$ } from '$lib/stores';

	let showModal = false;
	let imgData: TImageData;
	let imgBatches: TImageData[][] = [];

	function getImgData(size: number) {
		const chunkSize = Math.floor($landingImagesPortrait$.length / size);
		const batches = [];
		for (let i = 0; i < $landingImagesPortrait$.length; i += chunkSize) {
			if (batches.length === size - 1) {
				batches.push($landingImagesPortrait$.slice(i, $landingImagesPortrait$.length - 1));
				return batches;
			}
			batches.push($landingImagesPortrait$.slice(i, i + chunkSize));
		}
		return batches;
	}

	function openModal(data: TImageData) {
		imgData = data;
		showModal = true;
	}

	let screenWidth: number;

	$: if (screenWidth) {
		if (screenWidth > breakpoints.lg) {
			imgBatches = getImgData(3);
		}
		if (screenWidth > breakpoints.md) {
			imgBatches = getImgData(2);
		}
		imgBatches = getImgData(1);
	}

	let sizes = '(max-width: 1024px) 200px, 400px';
</script>

<svelte:window bind:innerWidth={screenWidth} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex justify-evenly gap-[clamp(2rem,5vw,4rem)]">
	{#each imgBatches as batches}
		<div class="flex h-full w-full flex-col">
			{#each batches as item}
				<CardItem imgData={item} on:click={() => openModal(item)} {sizes} />
			{/each}
		</div>
	{/each}
</div>

<ModalItem bind:showModal>
	<CardModalItem {imgData} />
</ModalItem>
