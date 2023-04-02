<script lang="ts">
	export let src: string;
</script>

<div class="box group relative aspect-square">
	<div
		class="absolute h-full w-full cursor-pointer bg-slate-800 opacity-30 transition-opacity lg:opacity-0 lg:group-hover:opacity-30"
		on:click={() => console.log('clicked')}
	/>
	<div
		class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100"
	>
		<h3
			class="font-montserrat text-xl font-semibold text-slate-50 opacity-80 lg:text-4xl lg:opacity-100"
		>
			ACRYLLIC
		</h3>
	</div>
	<img alt="someimage1" {src} class="h-full w-full object-cover" loading="lazy" />
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
</style>
