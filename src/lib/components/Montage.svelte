<script lang="ts">
	const pictures = [
		'gallery/pic_10_474x826.jpg',
		'/gallery/pic_11_1280x900.jpg',
		'/gallery/pic_12_720x1280.jpg',
		'/gallery/pic_13_1280x720.jpg',
		'/gallery/pic_14_960x1280.jpg'
	];

	let showA = true;
	$: showB = !showA;

	let indexA = 0;
	let indexB = 1;

	$: srcA = pictures[indexA];
	$: srcB = pictures[indexB];

	function toggleSwtich() {
		setInterval(() => {
			showA = !showA;
			setTimeout(() => {
				if (showA) {
					indexB = indexA === pictures.length - 1 ? 0 : indexA + 1;
				} else {
					indexA = indexB === pictures.length - 1 ? 0 : indexB + 1;
				}
			}, 1000);
		}, 4000);
	}

	toggleSwtich();
</script>

<div class="montage top-0 left-0  h-screen w-screen">
	<img
		alt="someimage1"
		src={srcA}
		class="absolute h-full w-full object-cover lg:fixed"
		style={`opacity: ${showA ? 1 : 0}`}
		fetchpriority="high"
	/>
	<img
		alt="someimage2"
		src={srcB}
		class=" absolute h-full w-full object-cover lg:fixed"
		style={`opacity: ${showB ? 1 : 0}`}
		fetchpriority="high"
	/>
</div>

<style>
	img {
		transition: opacity 800ms ease-in-out;
	}
</style>
