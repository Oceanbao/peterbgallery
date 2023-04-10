<script lang="ts">
	export let title: string;
</script>

<main class="relative grid pt-[15vh] px-[clamp(2rem,5vw,4rem)]">
	<h1 class="font-montserrat text-lg font-thin uppercase tracking-widest text-gray-50">{title}</h1>

	<hr class="mb-8 mt-2 h-[1px] bg-gray-300 lg:mb-16" />

	<slot />

	<hr class="my-8 h-[1px] bg-gray-300 lg:my-16" />
</main>
