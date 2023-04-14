<script lang="ts">
	import ModalItem from './ModalItem.svelte';
	import CardItem from './CardItem.svelte';
	import CardModalItem from './CardModalItem.svelte';
	import { breakpoints } from '../breakpoints';
	import {
		type TCloudImage,
		getCloudImagesByTechnique,
		groupByCollection,
		getFirstFromCollection
	} from '$lib/stores';

	export let categoryName: string;
	let showModal = false;
	let imgBatches: TCloudImage[][] = [];
	let modalImages: TCloudImage[];

	const allCloudImagesByTechnique$ = getCloudImagesByTechnique(categoryName);
	const allCloudImagesByTechniqueByCollection = groupByCollection($allCloudImagesByTechnique$);
	const allFirstImagesByCollection = getFirstFromCollection(allCloudImagesByTechniqueByCollection);

	function batchImages(size: number) {
		const chunkSize = Math.floor(allFirstImagesByCollection.length / size);
		const batches = [];
		for (let i = 0; i < allFirstImagesByCollection.length; i += chunkSize) {
			if (batches.length === size - 1) {
				batches.push(allFirstImagesByCollection.slice(i, allFirstImagesByCollection.length - 1));
				return batches;
			}
			batches.push(allFirstImagesByCollection.slice(i, i + chunkSize));
		}
		return batches;
	}

	function openModal(data: TCloudImage) {
		if (data.collection) {
			// NOTE: Get first 6
			modalImages = allCloudImagesByTechniqueByCollection[data.collection].slice(0, 7);
		}
		showModal = true;
	}

	let screenWidth: number;

	$: if (screenWidth) {
		if (screenWidth > breakpoints.lg) {
			imgBatches = batchImages(3);
		} else if (screenWidth > breakpoints.md) {
			imgBatches = batchImages(2);
		} else imgBatches = batchImages(1);
	}

	let sizes = '(max-width: 1024px) 200px, 400px';
</script>

<svelte:window bind:innerWidth={screenWidth} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex justify-evenly gap-[clamp(2rem,5vw,4rem)]">
	{#each imgBatches as batches}
		<div class="flex h-full w-full flex-col gap-16 lg:gap-32">
			{#each batches as item}
				<CardItem imgData={item} on:click={() => openModal(item)} {sizes} />
			{/each}
		</div>
	{/each}
</div>

<ModalItem bind:showModal>
	<CardModalItem {modalImages} />
</ModalItem>
