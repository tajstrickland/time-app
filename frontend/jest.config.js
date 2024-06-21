module.exports = {
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(axios)/)"], // Adjust this line to include the modules you want to transform
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Ensure Babel is used to transform JS/JSX files
  },
};
