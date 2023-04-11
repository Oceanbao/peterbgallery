<script lang="ts">
	import CardCategory from './CardCategory.svelte';
	import { landingImagesLandscape$ } from '$lib/stores';

	const imgData = $landingImagesLandscape$[0];
</script>

<div class="box grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 ">
	<CardCategory {imgData} title="pen and ink" link="/pen-and-ink" />
	<CardCategory {imgData} title="pen and ink" link="/pen-and-ink" />
	<CardCategory {imgData} title="pen and ink" link="/pen-and-ink" />
	<CardCategory {imgData} title="pen and ink" link="/pen-and-ink" />
</div>

<style>
</style>
