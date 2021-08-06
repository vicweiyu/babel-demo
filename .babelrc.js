const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ios: 10,
        android: 6,
      },
      corejs: {
        version: 3,
        proposals: true,
      },
      useBuiltIns: 'usage',
      debug: true,
    },
  ],
];
const plugins = [];

module.exports = { presets, plugins };
