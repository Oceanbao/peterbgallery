<script lang="ts">
	import ModalItem from './ModalItem.svelte';
	import CardItem from './CardItem.svelte';
  import CardModalItem from './CardModalItem.svelte';
	import { breakpoints } from '../breakpoints';
	import { dataPen, type TItem } from '$lib/stores';

  function fixPath(path: string) {
    return `/imagesPeterb/${path}`
  }

  function makeData(data: TItem) {
    return {
      webp: {
        '480w': fixPath(data.webp['480w']),
        '720w': fixPath(data.webp['720w']),
        '1024w': fixPath(data.webp['1024w']),
        '1920w': fixPath(data.webp['1920w']),
      },
      avif: {
        '480w': fixPath(data.avif['480w']),
        '720w': fixPath(data.avif['720w']),
        '1024w': fixPath(data.avif['1024w']),
        '1920w': fixPath(data.avif['1920w']),
      },
      jpg: {
        '480w': fixPath(data.jpg['480w']),
        '720w': fixPath(data.jpg['720w']),
        '1024w': fixPath(data.jpg['1024w']),
        '1920w': fixPath(data.jpg['1920w']),
      },
      blurBase64: data.blur
    }
  }

	let showModal = false;
	let modalData: TItem;

	function getData(size: number) {
		const chunkSize = Math.floor($dataPen.length / size);
		const batches = [];
		for (let i = 0; i < $dataPen.length; i += chunkSize) {
			if (batches.length === size - 1) {
				batches.push($dataPen.slice(i, $dataPen.length - 1));
				return batches;
			}
			batches.push($dataPen.slice(i, i + chunkSize));
		}
		return batches;
	}

  function openModal(data: TItem) {
    modalData = data
    showModal = true
  }

	function getFilePath(filename: string) {
		return `/gallery/${filename}`;
	}

	let screenWidth: number;

  let sizes = "(max-width: 1024px) 200px, 400px" 
</script>

<svelte:window bind:innerWidth={screenWidth} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex gap-[clamp(2rem,5vw,4rem)] justify-evenly">
	{#if screenWidth > breakpoints.lg}
		{#each getData(3) as batches}
			<div class="flex flex-col">
				{#each batches as item}
					<CardItem imgData={makeData(item[1])} on:click={() => openModal(item)} {sizes} />
				{/each}
			</div>
		{/each}
	{:else if screenWidth > breakpoints.md}
		{#each getData(2) as batches}
			<div class="flex flex-col">
				{#each batches as item}
					<CardItem imgData={makeData(item[1])}  on:click={() => openModal(item)} {sizes} />
				{/each}
			</div>
		{/each}
	{:else}
		{#each getData(1) as batches}
			<div class="flex flex-col">
				{#each batches as item}
					<CardItem imgData={makeData(item[1])} on:click={() => openModal(item)} {sizes} />
				{/each}
			</div>
		{/each}
	{/if}
</div>

<ModalItem bind:showModal>
  <CardModalItem {modalData} />
</ModalItem>
