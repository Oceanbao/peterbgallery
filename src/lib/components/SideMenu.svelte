<script lang="ts">
	import { sideMenuOpened } from '@/lib/stores';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
</script>

{#if $sideMenuOpened}
	<div
		in:fly={{ y: -500, easing: cubicOut, duration: 500 }}
		out:fly={{ y: -500, easing: cubicIn, duration: 500 }}
		class="fixed z-10 grid h-screen w-screen place-content-center bg-slate-900 font-opensans"
	>
		<nav class="flex flex-col gap-8 text-3xl text-gray-50">
			<a>About</a>
			<a>Profile</a>
			<a>Works</a>
		</nav>
	</div>
{/if}
