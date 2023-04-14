<script lang="ts">
	import FlyInBox from './FlyInBox.svelte';
	import Image from './Image.svelte';
	import type { TCloudImage } from '../stores';

	export let imgData: TCloudImage;
	export let title: string;
	export let link: string;

	const srcset = new Map();
	const formats = ['jpg', 'webp', 'avif'];

	formats.forEach((format) => {
		srcset.set(format, {
			'200w': `${imgData.url}?fm=jpg&q=60&w=200`,
			'400w': `${imgData.url}?fm=jpg&q=60&w=400`,
			'600w': `${imgData.url}?fm=jpg&q=60&w=600`,
			'800w': `${imgData.url}?fm=jpg&q=60&w=800`
		});
	});
</script>

<FlyInBox>
	<div class="group relative aspect-square">
		<div class="absolute top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]">
			<h3
				class="text-center font-montserrat text-2xl font-bold text-gray-50 transition-opacity lg:text-4xl lg:opacity-0 lg:group-hover:opacity-100"
			>
				{title}
			</h3>
		</div>
		<a
			href={link}
			class="absolute h-full w-full cursor-pointer opacity-70 transition-opacity duration-500 ease-in-out lg:opacity-100 lg:group-hover:opacity-70"
		>
			<Image
				clazz="w-full h-full object-cover"
				alt={imgData.name}
				width={String(imgData.width)}
				height={String(imgData.height)}
				srcsetJpg={srcset.get('jpg')}
				srcsetWebp={srcset.get('webp')}
				srcsetAvif={srcset.get('avif')}
				blurBase64={imgData.blurBase64}
				fetchpriority="high"
			/>
		</a>
	</div></FlyInBox
>
