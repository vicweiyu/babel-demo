module.exports = function (api) {
  api.cache(true);

  /*
  // Use @babel/preset-env to polyfill
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: 30,
        },
        corejs: {
          version: '3.16',
          proposals: true,
        },
        useBuiltIns: 'usage',
        modules: false,
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
        useESModules: false,
      },
    ],
  ];
  */

  // Use @babel/plugin-transform-runtime to polyfill
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: 30,
        },
        useBuiltIns: false,
        modules: 'auto',
        forceAllTransforms: true,
        debug: true,
      },
    ],
  ];

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: { version: 3, proposals: true },
        version: '^7.15.3',
        regenerator: true,
        useESModules: false,
      },
    ],
  ];

  return { sourceMap: 'both', presets, plugins };
};
