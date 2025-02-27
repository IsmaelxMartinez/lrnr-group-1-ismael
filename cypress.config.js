// cypress.config.js
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Replace with your app's URL
    supportFile: false, // Disable support file if not needed
  },
});