module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "react-app",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/first": "off",
    "no-useless-computed-key": "off"
  }
};
