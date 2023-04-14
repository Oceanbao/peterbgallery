import { derived, readable, writable } from 'svelte/store';
import landingImageData from '$lib/landing-images.json';
import categoryImageData from '$lib/category-images.json';
import cloudImageData from '$lib/cloud-images.json';
import photoData from '$lib/photos.json';

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

export const getCloudImagesByTechnique = (technique: string) => {
	const output$ = derived(cloudImages$, ($value) =>
		$value.filter((item) => item.technique === technique)
	);
	return output$;
};
export const groupByCollection = (images: TCloudImage[]) => {
	const output: Record<string, TCloudImage[]> = {};
	images.forEach((item) => {
		if (item.collection) {
			if (!output[item.collection]) {
				output[item.collection] = [];
				output[item.collection].push(item);
			} else {
				output[item.collection].push(item);
			}
		}
	});
	return output;
};
export const getFirstFromCollection = (imageObject: ReturnType<typeof groupByCollection>) => {
	return Object.values(imageObject).map((images) => images[0]);
};

export const sideMenuOpened = writable(false);
