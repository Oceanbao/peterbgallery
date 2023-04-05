import { readable, writable } from 'svelte/store';
import dataWork from '$lib/data.json';

export type TItem = typeof dataWork[0]

export const sideMenuOpened = writable(false);

export const dataPen = readable(dataWork);

