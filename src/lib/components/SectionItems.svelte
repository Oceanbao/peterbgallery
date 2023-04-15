<script lang="ts">
	import ModalItem from './ModalItem.svelte';
	import CardItem from './CardItem.svelte';
	import CardModalItem from './CardModalItem.svelte';
	import { breakpoints } from '../breakpoints';
	import type { TCloudImage } from '$lib/stores';

	export let allImages: Record<string, TCloudImage[]>;
	export let firstImages: TCloudImage[];
	let showModal = false;
	let imgBatches: TCloudImage[][] = [];
	let modalImages: TCloudImage[];

	function batchImages(size: number, arr: TCloudImage[]) {
		const allImages = [...arr];

		const batches: TCloudImage[][] = Array.from(Array(size).keys()).map((idx) => []);

		outer: while (allImages) {
			for (const batch of batches) {
				const image = allImages.pop();
				if (!image) break outer;
				batch.push(image);
			}
		}
		return batches;
	}

	function openModal(data: TCloudImage) {
		if (data.collection) {
			// NOTE: Get first 6
			modalImages = allImages[data.collection].slice(0, 7);
		}
		showModal = true;
	}

	let screenWidth: number;

	$: if (screenWidth) {
		switch (true) {
			case screenWidth > breakpoints.lg:
				imgBatches = batchImages(3, firstImages);
				break;
			case screenWidth > breakpoints.md:
				imgBatches = batchImages(2, firstImages);
				break;
			default:
				imgBatches = batchImages(1, firstImages);
				break;
		}
	}

	let sizes = '(max-width: 1024px) 200px, 400px';
</script>

<svelte:window bind:innerWidth={screenWidth} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex justify-evenly gap-[clamp(2rem,5vw,4rem)]">
	{#each imgBatches as batches}
		<div class="flex h-full w-full flex-col gap-16 lg:gap-32">
			{#each batches as item (item.name)}
				<CardItem imgData={item} on:click={() => openModal(item)} {sizes} />
			{/each}
		</div>
	{/each}
</div>

<ModalItem bind:showModal>
	<CardModalItem {modalImages} />
</ModalItem>
