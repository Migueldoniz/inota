module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [['react-native-worklets-core/plugin'], ['react-native-reanimated/plugin']],
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
