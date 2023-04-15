<script lang="ts">
	import { page } from '$app/stores';
	import SectionItems from '@/lib/components/SectionItems.svelte';

	export let data;
	$: ({ allImages, firstImages } = data);

	$: technique = (() => {
		if ($page.params.technique === 'cink') {
			return 'chinese ink';
		}
		if ($page.params.technique === 'printing') {
			return 'printing ink';
		}
		return $page.params.technique;
	})();
</script>

<main class="relative grid px-[clamp(2rem,5vw,4rem)] pt-[15vh]">
	<h1 class="font-montserrat text-lg font-normal uppercase tracking-widest text-white lg:text-2xl">
		{technique}
	</h1>

	<hr class="mb-8 mt-2 h-0 border-none bg-gray-300 lg:mb-16" />

	<SectionItems {allImages} {firstImages} />
</main>
