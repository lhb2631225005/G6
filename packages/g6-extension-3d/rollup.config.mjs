import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { visualizer } from 'rollup-plugin-visualizer';

const isBundleVis = !!process.env.BUNDLE_VIS;

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/g6-extension-3d.min.js',
      name: 'g6-extension-3d',
      format: 'umd',
      sourcemap: false,
    },
    plugins: [
      nodePolyfills(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
      terser(),
      ...(isBundleVis ? [visualizer()] : []),
    ],
  },
];
