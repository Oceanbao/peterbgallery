<script lang="ts">
	export let srcsetAvif: Record<string, string>;
	export let srcsetWebp: Record<string, string>;
	export let srcsetJpg: Record<string, string>;
	export let blurBase64: string;
	export let loading: 'lazy' | 'eager' | null = 'lazy';
	export let fetchpriority: 'high' | 'low' | 'auto' | undefined;
	export let alt: string;
	export let width: string;
	export let height: string;
	export let clazz = '';
	export let clazzBox = '';
	export let stylee = '';
	export let styleeBox = '';
	export let sizes = '100vw';

	$: _srcsetAvif = Object.entries(srcsetAvif).reduce((acc, [w, src]) => acc + `${src} ${w},`, '');
	$: _srcsetWebp = Object.entries(srcsetWebp).reduce((acc, [w, src]) => acc + `${src} ${w},`, '');
	$: _srcsetJpg = Object.entries(srcsetJpg).reduce((acc, [w, src]) => acc + `${src} ${w},`, '');
</script>

<div
	class={clazzBox}
	style={`background: url(${blurBase64}) no-repeat center/cover; aspect-ratio: auto ${width} / ${height}; ${styleeBox}`}
>
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
			style={stylee}
			{alt}
			{fetchpriority}
		/>
	</picture>
</div>
