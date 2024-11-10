module.exports = {
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ECMAScript features
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // Disable rule that disallows 'any' type
    // Other rules...
  },
};
