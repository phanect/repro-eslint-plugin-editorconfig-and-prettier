module.exports = {
  root: true,
  extends: "plugin:editorconfig/all",

  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  plugins: [ "editorconfig" ],
};
