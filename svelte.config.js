import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Replace this with your actual repo name
const dev = process.env.NODE_ENV === 'development';
const repoName = 'Simon-DevPortfolio';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`,
		},
		appDir: 'app', // optional, to avoid long hashed names if you want
	}
};

export default config;
