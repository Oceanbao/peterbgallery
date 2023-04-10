<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut, cubicIn } from 'svelte/easing';

	export let showModal: boolean;
</script>

<svelte:head>
	{#if showModal}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<section
		in:fade={{ duration: 500, easing: cubicOut }}
		out:fade={{ duration: 500, easing: cubicIn }}
		class="modal fixed inset-0 z-30 grid place-items-center overflow-y-scroll overscroll-contain bg-neutral-200"
	>
		<!-- icon-cross -->
		<svg
			class="fixed top-6 right-4 z-40 h-8 w-8"
			on:click={() => (showModal = false)}
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

		<slot />
	</section>
{/if}
