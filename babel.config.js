module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@features': './src/features',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
        },
      },
    ],
    'tailwindcss-react-native/babel',
  ],
};
