import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default {
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
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: 'node_modules/**',
    }),
  ],
}
