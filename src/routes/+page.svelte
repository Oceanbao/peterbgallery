<script lang="ts">
	import Montage from '@/lib/components/Montage.svelte';
	import SectionCategory from '@/lib/components/SectionCategory.svelte';
	import LoadingOverlay from '@/lib/components/LoadingOverlay.svelte';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(async () => {
		await new Promise((res) => setTimeout(res, 1000));
		loading = false;
	});
</script>

{#if loading}
	<LoadingOverlay />
{/if}

<Montage />

<main class="relative grid bg-primary-dark px-[clamp(2rem,5vw,4rem)]">
	<hr class="my-8 h-[1px] bg-gray-300 lg:my-16" />

	<SectionCategory />
</main>
