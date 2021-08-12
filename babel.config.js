module.exports = function (api) {
  api.cache(true);

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

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        regenerator: false,
      },
    ],
  ];

  return { presets, plugins };
};
