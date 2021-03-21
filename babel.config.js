module.exports = function(api) {
  api.cache(true);
  return {
    "plugins": [
      ["module:react-native-dotenv", {
        "blacklist": [
          "GITHUB_TOKEN"
        ]
      }]
    ],
    presets: ['babel-preset-expo'],
  };
};
