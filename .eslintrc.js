module.exports = {
  env: {
    browser: true,
    jquery: true,
  },
  extends: [
    "plugin:import/warnings",
    "plugin:import/errors",
    "plugin:react/recommended",
    // Airbnb must come before prettier, so that it doesn't apply
    // rules conflicting with prettier's formatting style.
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  globals: {
    google: true,
    gtag: true,
    Turbolinks: true,
    ActionCable: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["jsx-a11y", "import", "react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    curly: ["error", "multi-line"],
    quotes: ["error", "double"],
    // TODO: configure these Airbnb rules as necessary
    // "array-callback-return": ["warn"],
    // "arrow-body-style": ["warn"],
    // "class-methods-use-this": ["warn"],
    // "consistent-return": ["warn"],
    // "dot-notation": ["warn"],
    // "import/no-unresolved": ["warn"],
    // "import/order": ["warn"],
    // "import/prefer-default-export": ["warn"],
    // "new-cap": ["warn"],
    // "no-new": ["warn"],
    // "no-param-reassign": ["warn"],
    // "no-plusplus": ["warn"],
    "no-undef": ["warn"],
    // "no-underscore-dangle": ["warn"],
    "no-unused-expressions": ["warn"],
    // "no-use-before-define": ["warn"],
    // "prefer-destructuring": ["warn"],
    // "react/default-props-match-prop-types": ["warn"],
    // "react/destructuring-assignment": ["warn"],
    // "react/forbid-prop-types": ["warn"],
    // "react/jsx-filename-extension": ["warn"],
    // "react/no-access-state-in-setstate": ["warn"],
    // "react/no-array-index-key": ["warn"],
    // "react/no-unused-prop-types": ["warn"],
    // "react/no-unused-state": ["warn"],
    // "react/prefer-stateless-function": ["warn"],
    // "react/require-default-props": ["warn"],
    // "react/sort-comp": ["warn"],
    // eqeqeq: ["warn"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "es6", ""],
        paths: ["app/javascript"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
