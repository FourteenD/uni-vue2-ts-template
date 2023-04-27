const config = {
  printWidth: 120,
  trailingComma: "all",
  htmlWhitespaceSensitivity: "strict",
  plugins: ["prettier-plugin-packagejson"],
  overrides: [
    {
      files: ".*rc",
      options: {
        parser: "json",
      },
    },
  ],
};

export default config;
