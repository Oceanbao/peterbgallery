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
			'400w': `${imgData.url}?fm=${format}&q=60&w=400`,
			'600w': `${imgData.url}?fm=${format}&q=60&w=600`,
			'800w': `${imgData.url}?fm=${format}&q=60&w=800`,
			'1200w': `${imgData.url}?fm=${format}&q=60&w=1200`
		});
	});
</script>

<FlyInBox>
	<div class="box group relative aspect-square">
		<div class="absolute top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%]">
			<h3
				class="link-text text-center font-montserrat text-2xl font-thin text-gray-50 transition-opacity lg:text-4xl lg:opacity-0 lg:group-hover:opacity-100"
			>
				{title}
			</h3>
		</div>
		<a
			href={link}
			class="absolute h-full w-full cursor-pointer opacity-70 transition-opacity duration-500 ease-in-out lg:opacity-100 lg:group-hover:opacity-40"
		>
			<Image
				clazz="w-full h-full object-cover"
				styleeBox="width: 100%; height: 100%;"
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

<style>
	.link-text {
		position: relative;
		text-decoration: none;
	}

	.link-text::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		transform: scaleX(0);
		transition: transform 600ms ease;
	}

	.box:hover .link-text::before {
		transform: scaleX(1);
	}
</style>
