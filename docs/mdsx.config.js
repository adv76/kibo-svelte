import { defineConfig } from 'mdsx';
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
 
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	blueprints: {
		default: {
			path: resolve(__dirname, "./src/lib/components/mdsx/blueprint.svelte"),
		},
	},
});
