/// <reference types="vite/client" />

/**
 * Returns the correct asset path based on the environment
 * In development: /assets/...
 * In production (GitHub Pages): /1tabb_website/assets/...
 */
export function getAssetPath(path: string): string {
    const base = import.meta.env.BASE_URL || '/';
    // Remove leading slash from path if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Combine base and path
    return `${base.endsWith('/') ? base.slice(0, -1) : base}/${cleanPath}`;
}
