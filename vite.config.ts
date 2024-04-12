import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import viteImagemin from 'vite-plugin-imagemin';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-testing/test",
  plugins: [
    react(),
    reactRefresh(),
	tsconfigPaths(),
    viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false
			},
			optipng: {
				optimizationLevel: 7
			},
			mozjpeg: {
				quality: 70
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox'
					},
					{
						name: 'removeEmptyAttrs',
						active: false
					}
				]
			}
		})
  ]
});
