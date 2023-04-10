<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let entering: boolean;

	let isInView: boolean;
	let scrollDirection: string;
	const options: Options = {
		rootMargin: '-10%',
		unobserveOnEnter: false
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = String(detail.scrollDirection.vertical);
	};
	const handleEnter = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		entering = true;
	};
	const handleLeave = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		entering = false;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	use:inview={options}
	on:inview_change={handleChange}
	on:inview_enter={handleEnter}
	on:inview_leave={handleLeave}
	style={`--y: ${scrollDirection === 'down' ? '40%' : '-40%'};`}
>
	<!-- style={`--y: ${scrollDirection === 'down' ? '50px' : '-50px'}; --opacity-delay: ${ -->
	<!-- 	entering ? '600ms' : '0ms' -->
	<!-- };`} -->
	<div class={`box ${isInView ? 'inview' : 'outview'}`}><slot /></div>
</div>

<style>
	/* .box::before { */
	/* 	display: block; */
	/* 	content: ''; */
	/* 	position: absolute; */
	/* 	width: 100%; */
	/* 	height: 100%; */
	/* 	-moz-box-shadow: inset 0px 0px 8px 4px rgb(235, 233, 238); */
	/* 	-webkit-box-shadow: inset 0px 0px 8px 4px rgb(235, 233, 238); */
	/* 	box-shadow: inset 0px 0px 20px 20px rgb(235, 233, 238); */
	/* } */
	.box {
		/* transition: opacity 300ms linear var(--opacity-delay), transform 1s ease-in-out; */
		transition: transform 2.5s cubic-bezier(0.18, 1, 0.21, 1),
			opacity 2.5s cubic-bezier(0.18, 1, 0.21, 1);
	}

	.outview {
		transform: translateY(var(--y));
		opacity: 0;
	}

	.inview {
		transform: translateY(0%);
		opacity: 1;
	}
</style>
