<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { sideMenuOpened } from '@/lib/stores';

	function toggleMenu() {
		$sideMenuOpened = !$sideMenuOpened;
	}

	let showWorks = false;
	let showWorksTimer: NodeJS.Timeout;

	function onHoverWorks() {
		if (showWorksTimer) clearTimeout(showWorksTimer);
		showWorks = true;
	}
	function offHoverWorks() {
		if (showWorksTimer) clearTimeout(showWorksTimer);
		showWorksTimer = setTimeout(() => {
			showWorks = false;
		}, 300);
	}
</script>

<header
	class="h-5vh fixed top-0 left-0 z-20 flex w-full items-center justify-between px-[clamp(2rem,5vw,4rem)] py-4 font-montserrat md:py-6 lg:py-8"
>
	<div class="text-lg font-medium text-primary-light lg:text-2xl">
		<a href="/">peterb</a>
	</div>
	<div class="flex items-center justify-center gap-2 lg:gap-6">
		<!-- <ThemeToggle /> -->
		<nav
			class="hidden gap-8 font-opensans text-lg font-medium text-primary-light lg:flex lg:text-2xl"
		>
			<div class="relative" on:mouseenter={onHoverWorks} on:mouseleave={offHoverWorks}>
				<span class="">works</span>
				{#if showWorks}
					<div
						transition:fly={{ y: -50, duration: 800 }}
						class="works absolute top-[50%] left-[50%] flex flex-col items-center justify-center gap-4 text-center text-lg leading-6 text-primary-light [transform:translate(-50%,10%)] lg:text-2xl"
					>
						<a href="/pen">pen</a>
						<a href="/water">water</a>
						<a href="/cink">chinese ink</a>
						<a href="/acrylic">acrylic</a>
						<a href="/printing">printing ink</a>
						<a href="/oil">oil</a>
					</div>
				{/if}
			</div>
			<a href="/about"><span class="">about</span></a>
			<a href="/contact"><span class="">contact</span></a>
		</nav>
		<button class="relative h-[35px] w-[35px] lg:hidden" on:click={toggleMenu}>
			{#if $sideMenuOpened}
				<svg
					in:fly={{ y: -30, delay: 500 }}
					out:fly={{ y: 30 }}
					class="text-white"
					width="30"
					height="30"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			{:else}
				<svg
					in:fly={{ y: -30, delay: 500 }}
					out:fly={{ y: 30 }}
					class="text-white"
					width="30"
					height="30"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			{/if}
		</button>
	</div>
</header>

<style>
	.works a {
		position: relative;
		text-decoration: none;
	}

	.works a::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		transform: scaleX(0);
		transition: transform 300ms ease;
	}

	.works a:hover::before {
		transform: scaleX(1);
	}
</style>
