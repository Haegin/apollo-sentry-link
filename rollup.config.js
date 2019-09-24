const resolve = require('rollup-plugin-node-resolve')

module.exports = {
  input: './src/index.js',
  output: {
    name: 'apolloSentryLink',
    file: './bundle.js',
    format: 'umd',
  },
  plugins: [
    resolve({
      mainFields: ['browser'],
    }),
  ],
}
