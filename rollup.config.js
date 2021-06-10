import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: path.join(__dirname, './src/jquery.i18n.properties.js'),
  output: {
    format: 'cjs',
    exports: 'auto',
    file: path.join(__dirname, `./dist/jquery.i18n.properties.min.js`)
  },
  plugins: [
    resolve({
      extensions: ['.js', '.ts'],
      modulesOnly: true,
      preferBuiltins: true
    }),
    commonjs(),
    nodePolyfills(),
    esbuild({
      include: /\.[jt]?s$/,
      exclude: /node_modules/,
      sourceMap: false,
      minify: process.env.NODE_ENV === 'production',
      target: 'es5'
    })
  ],
  external: ['$']
};
