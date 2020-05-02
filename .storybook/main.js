module.exports = {
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  stories: [
    '../packages/design-system/src/**/*.stories.tsx',
    '../packages/function-library/src/**/*.stories.tsx',
    '../packages/storybook-helpers/src/**/*.stories.tsx',
    '../packages/ui-library/src/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links']
};
