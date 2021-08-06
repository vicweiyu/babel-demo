module.exports = () => ({
  plugins: [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-computed-properties',
    ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
  ],
});
