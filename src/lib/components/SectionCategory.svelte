<script lang="ts">
	import CardCategory from './CardCategory.svelte';

	const src1 = '/gallery/pic_9_1280x720.jpg';
	const src2 = '/gallery/pic_8_719x1280.jpg';
	const src3 = '/gallery/pic_7_1280x720.jpg';
	const src4 = '/gallery/pic_6_843x1280.jpg';
</script>

<div class="box grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 ">
	<CardCategory src={src1} title="pen and ink" link="/pen-and-ink" />
	<CardCategory src={src2} />
	<CardCategory src={src3} />
	<CardCategory src={src4} />
</div>

<style>
	.box {
	}
</style>
