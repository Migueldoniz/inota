const path = require('path');

const autolinkingPath = require.resolve('expo-modules-autolinking/package.json', {
  paths: [require.resolve('expo/package.json')],
});

console.log(path.dirname(autolinkingPath));
