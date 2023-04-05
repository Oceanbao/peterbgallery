<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';

	export let src: string;
	export let title = 'mona lisa';
	export let dimension = '38 x 38';
	// export let link: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<FlyInBox>
	<div on:click class="flex aspect-auto flex-col">
		<img alt="someimage1" {src} class="h-full w-full " loading="lazy" />
		<div class="description flex flex-col gap-2">
			<p class="font-montserrat text-sm font-thin uppercase text-gray-50 lg:text-xl">
				{title}
			</p>
			<p class="lg:text-l font-montserrat text-xs font-light uppercase text-gray-50">
				{dimension}
			</p>
		</div>
	</div></FlyInBox
>
