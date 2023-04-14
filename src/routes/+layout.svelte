<script lang="ts">
	import '@/app.css';
	import Footer from '@/lib/components/Footer.svelte';
	import Header from '@/lib/components/Header.svelte';
	import SideMenu from '@/lib/components/SideMenu.svelte';
</script>

<svelte:head>
	<script>
		// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
		if (
			localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<div class="relative z-50 bg-primary-dark ">
	<Header />
	<SideMenu />
	<slot />
	<Footer />
</div>
