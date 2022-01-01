const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system']); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  styledComponents: true,
});
