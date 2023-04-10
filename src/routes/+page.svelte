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

<main class="relative grid px-[clamp(2rem,5vw,4rem)] lg:bg-slate-900">
	<hr class="my-8 h-[1px] bg-gray-300 lg:my-16" />

	<SectionCategory />

	<hr class="my-8 h-[1px] bg-gray-300 lg:my-16" />
</main>
