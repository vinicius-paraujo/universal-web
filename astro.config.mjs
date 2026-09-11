// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://universal.markineo.com.br',
	output: 'static',
	integrations: [sitemap()],
	i18n: {
		locales: ['pt-br', 'en'],
		defaultLocale: 'pt-br',
		routing: { prefixDefaultLocale: false },
	},
});
