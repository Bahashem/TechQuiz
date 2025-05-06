import { defineConfig } from 'cypress';
import { mount } from 'cypress/react18';
import customViteConfig from './vite.config.js';

export default defineConfig({ 
e2e: {
    baseUrl: 'http://localhost:3000',
  },
    component: {
        devServer: {
        framework: 'react',
        bundler: 'vite',
        viteConfig: customViteConfig,
        },
        specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/component.ts',
        

    },
})
