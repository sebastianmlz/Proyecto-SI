import { sveltekit } from '@sveltejs/kit/vite';

export default {
	plugins: [sveltekit()],
	server: {
		fs: {
		allow: ['./static'] // Permitir acceso a la carpeta static
		}
	}
};
