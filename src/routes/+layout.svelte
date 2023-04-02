<script lang="ts">
	import '@/app.css';
	import Header from '@/lib/components/Header.svelte';
	import SideMenu from '@/lib/components/SideMenu.svelte';
</script>

<main class="bg-[rgb(235,233,238)]">
	<Header />
	<SideMenu />

	<slot />
</main>
