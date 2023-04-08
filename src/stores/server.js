import { readable, writable } from 'svelte/store';

// Debug toggle for development
export let debugMode = writable(false);

// Attempt to obtain the Ampache server installation based on requested path
let detectedPathname = (window.location.pathname).split(/\/ample/)[0];
let detectedURL = (window.location.origin + detectedPathname);

export let APIVersion = writable("6.0.0");

export const serverURL = readable(detectedURL, function start(set) {
    // local testing override
    if (import.meta.env.DEV) {
        detectedURL = "http://ampache-preview";

        // stable demo server override
        // detectedURL = "https://demo.ampache.dev";

        // develop demo server override
        // detectedURL = "https://develop.ampache.dev";
    }

    set(detectedURL);
    return function stop() {};
});

export const serverPathname = readable(detectedPathname, function start(set) {
    set(detectedPathname);
    return function stop() {};
});

export let serverVersion = writable('');

export let allArtists = writable([]);
export let allAlbumArtists = writable([]);
export let groupedArtists = writable(null);
export let groupedAlbumArtists = writable(null);