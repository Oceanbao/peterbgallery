<script lang="ts">
	import Image from '@/lib/components/Image.svelte';
	import { photoImages$ } from '@/lib/stores';

	let showA = true;
	$: showB = !showA;

	let indexA = 0;
	let indexB = 1;

	$: srcA = $photoImages$[indexA];
	$: srcB = $photoImages$[indexB];

	function toggleSwtich() {
		setInterval(() => {
			showA = !showA;
			setTimeout(() => {
				if (showA) {
					indexB = indexA === $photoImages$.length - 1 ? 0 : indexA + 1;
				} else {
					indexA = indexB === $photoImages$.length - 1 ? 0 : indexB + 1;
				}
			}, 1000);
		}, 4000);
	}

	toggleSwtich();
</script>

<main
	class="flex flex-col justify-center gap-[clamp(2rem,5vw,4rem)] px-[clamp(2rem,5vw,4rem)] pt-[20vh] md:flex-row"
>
	<div class="montage relative aspect-square w-full md:h-[33%] md:w-[33%] md:self-center">
		<div class="absolute h-full w-full">
			<Image
				stylee={`opacity: ${showA ? 1 : 0};`}
				clazz=" h-full w-full object-cover [transition:opacity_800ms_ease-in-out]"
				alt={srcA.name}
				width={String(srcA.width)}
				height={String(srcA.height)}
				srcsetJpg={srcA.srcset.jpg}
				srcsetWebp={srcA.srcset.webp}
				srcsetAvif={srcA.srcset.avif}
				blurBase64={srcA.blurBase64}
				fetchpriority="high"
			/>
		</div>
		<div class="absolute h-full w-full">
			<Image
				stylee={`opacity: ${showB ? 1 : 0};`}
				clazz=" h-full w-full object-cover [transition:opacity_800ms_ease-in-out]"
				alt={srcB.name}
				width={String(srcB.width)}
				height={String(srcB.height)}
				srcsetJpg={srcB.srcset.jpg}
				srcsetWebp={srcB.srcset.webp}
				srcsetAvif={srcB.srcset.avif}
				blurBase64={srcB.blurBase64}
				fetchpriority="high"
			/>
		</div>
	</div>

	<div class="md:w-[50vw]">
		<h1
			class="my-4 text-center font-montserrat text-lg font-thin tracking-widest text-gray-50 md:text-xl lg:text-2xl"
		>
			Peter P. Bao
		</h1>
		<div
			class="text-justify font-opensans text-sm font-extralight text-white md:text-base lg:text-lg"
		>
			<p class="my-4">
				Peter is a Chinese artist who has been residing in Marbella, Spain. A devout follower of
				Buddhist culture and faith, Peter has been dedicating for decades to depicting the beauty of
				humanity and nature, imbuing his works with Zen philosophy.
			</p>
			<p class="my-4">
				He holds a deep conviction that love and diligence are the fundamental elements of an
				artist’s expression of the beauty of life. His works has been highly received by collectors.
			</p>
			<p class="my-4">
				For over 40 years, Peter has been focusing on pen drawing, with a rich variety of
				characters, elegant and vividness. He has a unique expressive ability and style. His works
				have been exhibited and auctioned many times, with collectors across the world. With a rich
				experience in multiple forms and techniques, Peter’s works span over canvas and paper, water
				color and oil and acrylic, among others.
			</p>
			<p class="my-4">
				His works are rich in themes and colours, with a distinctive blend of realism and
				abstraction. In particular, Peter’s Chinese ink are permeated with traditional Chinese and
				Japanese ukiyo-e styles, conveying his contemplation and emotions on Zen aesthetics in both
				Buddhist and humanistic thinking, filled with rigour and agility, uniqueness and shock.
			</p>
		</div>
	</div>
</main>
