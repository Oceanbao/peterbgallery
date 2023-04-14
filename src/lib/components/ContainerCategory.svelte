<script lang="ts">
	export let title: string;
</script>

<main class="relative grid px-[clamp(2rem,5vw,4rem)] pt-[15vh]">
	<h1 class="font-montserrat text-lg font-normal uppercase tracking-widest text-white lg:text-2xl">
		{title}
	</h1>

	<hr class="mb-8 mt-2 h-0 border-none bg-gray-300 lg:mb-16" />

	<slot />
</main>
