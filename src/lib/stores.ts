import { readable, writable } from 'svelte/store';
import landingImageData from '$lib/landing-images.json';
import categoryImageData from '$lib/category-images.json';
import photoData from '$lib/photos.json';
import cloudImageData from '$lib/cloud-images.json';

export type TLocalImage = {
	name: string;
	technique: string;
	dimension: string;
	width: number;
	height: number;
	srcset: {
		jpg: {
			'400w': string;
			'800w': string;
			'1200w': string;
		};
		webp: {
			'400w': string;
			'800w': string;
			'1200w': string;
		};
		avif: {
			'400w': string;
			'800w': string;
			'1200w': string;
		};
	};
	blurBase64: string;
};

export type TCloudImage = {
	name: string;
	technique: string;
	dimension: string;
	collection: string;
	width: number;
	height: number;
	url: string;
	blurBase64: string;
};

export const photoImages$ = readable(photoData);

export const landingImagesPortrait$ = readable(
	landingImageData.filter((data) => data.name.includes('portrait'))
);
export const landingImagesLandscape$ = readable(
	landingImageData.filter((data) => data.name.includes('landscape'))
);
export const landingImagesCategory$ = readable(categoryImageData);

export const cloudImages$ = readable(cloudImageData);

export const sideMenuOpened = writable(false);
