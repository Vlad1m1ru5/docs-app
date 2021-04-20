module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", { ignoreStrings: true }],
    quotes: ["error", "double"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
