import { readable, writable } from 'svelte/store';
import landingImageData from '$lib/landing-images.json';

export type TImageData = (typeof landingImageData)[0];

export const landingImagesPortrait$ = readable(
	landingImageData.filter((data) => data.name.includes('portrait'))
);
export const landingImagesLandscape$ = readable(
	landingImageData.filter((data) => data.name.includes('landscape'))
);

export const sideMenuOpened = writable(false);
