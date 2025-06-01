// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
  const config =({
  testDir: './tests',
  timeout:40*1000,
  expect: { 
     timeout: 10000
  } ,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
     browserName:'firefox',
     headeless :true
  },

  /* Configure projects for major browsers */

});
module.exports= config;

