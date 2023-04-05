<script lang="ts">
	import '@/app.css';
	import Footer from '@/lib/components/Footer.svelte';
	import Header from '@/lib/components/Header.svelte';
	import SideMenu from '@/lib/components/SideMenu.svelte';
</script>

<div class="bg-slate-900">
	<Header />
	<SideMenu />
	<slot />
	<Footer />
</div>
