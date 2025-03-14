import type {StorybookConfig} from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  previewHead: (head) => `${head}
      <script type="module" src="/www/build/demo.esm.js"></script>
      <script nomodule src="/www/build/demo.js"></script>
    `,
  async viteFinal(config) {
    const {mergeConfig} = await import('vite');
    const {liveReload} = await import('vite-plugin-live-reload');

    return mergeConfig(config, {
      plugins: [
        liveReload(['www/build/demo.esm.js', 'www/build/demo.js']),
      ]
    });
  },
};
export default config;
