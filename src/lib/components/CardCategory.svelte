<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';
  import Image from './Image.svelte';

	export let imgData: Record<string, string | Record<string, string>>;
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
      <Image clazz="h-full w-full object-cover" alt="someimage1" width="1024" height="723" srcsetJpg={imgData.jpg} srcsetWebp={imgData.webp} srcsetAvif={imgData.avif} blurBase64={imgData.blurBase64}/>
		</a>
	</div></FlyInBox
>
