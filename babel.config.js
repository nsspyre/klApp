module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        cwd: 'babelrc',
        alias: {
          '@assets': './assets',
          '@components': './src/components/',
          '@constants': './src/constants/index.js',
          '@services': './src/services/',
          '@screens': './src/screens/',
          '@state': './src/state/',
        },
      },
    ],
  ],
};
