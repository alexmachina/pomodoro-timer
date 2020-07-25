module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.ts(x)$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    config.resolve.extensions = [".js", ".ts", ".tsx"];
    return config;
  },
};
