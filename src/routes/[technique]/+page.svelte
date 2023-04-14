<script>
	import { page } from '$app/stores';
	import ContainerCategory from '@/lib/components/ContainerCategory.svelte';
	import SectionItems from '@/lib/components/SectionItems.svelte';
</script>

<ContainerCategory title={$page.params.technique}>
	<SectionItems categoryName={$page.params.technique} />
</ContainerCategory>
