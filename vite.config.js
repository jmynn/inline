/**
 * @type {import('vite').UserConfig}
 */
import autoprefixer from 'autoprefixer';
export default {
	css: {
		transformer: 'postcss',
		postcss: {
			plugins: [autoprefixer],
		},
	},
};
