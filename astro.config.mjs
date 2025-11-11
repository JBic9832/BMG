// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import netlify from "@astrojs/netlify";

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({ applyBaseStyles: false }), react({ experimentalReactChildren: true, }), svelte({ extensions: ['.svelte'] })],
	output: 'server',
	adapter: netlify(),
});
