<script lang="ts">
	export let srcsetAvif: Record<string, string>;
	export let srcsetWebp: Record<string, string>;
	export let srcsetJpg: Record<string, string>;
	export let blurBase64: string;
	export let loading: 'lazy' | 'eager' | null = 'lazy';
	export let fetchpriority: 'high' | 'low' | 'auto' | undefined;
	export let alt: string;
	export let clazz: string;
	export let stylee: string;
	export let sizes = '100vw';

	$: _srcsetAvif = Object.entries(srcsetAvif).reduce((acc, [w, src]) => acc + `${src} ${w},`, '');
	$: _srcsetWebp = Object.entries(srcsetWebp).reduce((acc, [w, src]) => acc + `${src} ${w},`, '');
	$: _srcsetJpg = Object.entries(srcsetJpg).reduce((acc, [w, src]) => acc + `${src} ${w},`, '');

	let width = '480';
	let height = '';
</script>

<picture>
	<source type="image/avif" srcset={_srcsetAvif} {sizes} />
	<source type="image/webp" srcset={_srcsetWebp} {sizes} />
	<img
		class={clazz}
		src={srcsetJpg['1200w']}
		srcset={_srcsetJpg}
		{sizes}
		{width}
		{height}
		{loading}
		decoding="async"
		style={`background: url(${blurBase64}) no-repeat center/cover; ${stylee}`}
		{alt}
		{fetchpriority}
	/>
</picture>
