<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';

	export let src: string;
	export let title: string;
	export let link: string;
</script>

<FlyInBox>
	<div class="group relative aspect-square">
		<div class="absolute top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]">
			<h3
				class="font-montserrat text-2xl font-bold text-gray-50 transition-opacity lg:text-4xl lg:opacity-0 lg:group-hover:opacity-100"
			>
				{title}
			</h3>
		</div>
		<a
			href={link}
			class="absolute h-full w-full cursor-pointer opacity-70 transition-opacity duration-500 ease-in-out lg:opacity-100 lg:group-hover:opacity-70"
		>
			<img alt="someimage1" {src} class="h-full w-full object-cover" loading="lazy" />
		</a>
	</div></FlyInBox
>
