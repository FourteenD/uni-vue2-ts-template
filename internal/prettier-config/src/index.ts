export default {
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
