<script lang="ts">
	import CardCategory from './CardCategory.svelte';
	import { cloudImages$ } from '$lib/stores';

	function getCategoryImage(type: string) {
		return $cloudImages$.filter((data) => data.technique === type)[0];
	}
</script>

<div class="box grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 ">
	<CardCategory imgData={getCategoryImage('pen')} title="PEN" link="/pen" />
	<CardCategory imgData={getCategoryImage('cink')} title="CHINESE INK" link="/cink" />
	<CardCategory imgData={getCategoryImage('water')} title="WATER COLOUR" link="/water" />
	<CardCategory imgData={getCategoryImage('acrylic')} title="ACRYLIC" link="/acrylic" />
	<CardCategory imgData={getCategoryImage('printing')} title="PRINTING INK" link="/printing" />
	<CardCategory imgData={getCategoryImage('oil')} title="OIL" link="/oil" />
</div>

<style>
</style>
