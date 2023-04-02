<script lang="ts">
	import CardCategory from './CardCategory.svelte';

	const src1 = '/gallery/pic_9_1280x720.jpg';
	const src2 = '/gallery/pic_8_719x1280.jpg';
	const src3 = '/gallery/pic_7_1280x720.jpg';
	const src4 = '/gallery/pic_6_843x1280.jpg';
</script>

<div class=" grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-0 ">
	<CardCategory src={src1} />
	<CardCategory src={src2} />
	<CardCategory src={src3} />
	<CardCategory src={src4} />
</div>
