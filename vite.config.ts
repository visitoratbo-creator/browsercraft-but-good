import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), devtoolsJson()],
	server: {
		host: '0.0.0.0',
		port: 8081,
		allowedHosts: [
			'114dcb0f1437d3d9-1-8081.papa.r.killercoda.com'
		]
	}
});
