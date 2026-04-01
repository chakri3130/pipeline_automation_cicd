import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.pipeline',
  appName: process.env['APP_NAME'] || 'testpipeline',
  webDir: 'www'
};

export default config;
