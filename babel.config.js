module.exports = function (api) {
  api.cache(true);
  return {
    "presets": ["babel-preset-expo"],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@styles": "./src/styles",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@pages": "./src/pages",
            "@services": "./src/services",
            "@store": "./src/store",
            "@utils": "./src/utils",
          }
        },
      ],
    ],
  };
};
