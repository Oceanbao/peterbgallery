import type { PageLoad } from './$types';
import type { TCloudImage } from '$lib/stores';
import cloudImageData from '$lib/cloud-images.json';

const getCloudImagesByTechnique = (technique: string) => {
	return cloudImageData.filter((item) => item.technique === technique);
};

const groupTechniqueByCollection = (images: TCloudImage[]) => {
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

const getFirstFromCollection = (imageObject: ReturnType<typeof groupTechniqueByCollection>) => {
	return Object.values(imageObject).map((images) => images[0]);
};

export const load: PageLoad = (event) => {
	const allImages = groupTechniqueByCollection(getCloudImagesByTechnique(event.params.technique));
	const firstImages = getFirstFromCollection(allImages);

	return {
		allImages,
		firstImages
	};
};
