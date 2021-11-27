import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = {
    input: 'src/index.js',
    output: {
        file: 'dist/main.js',
        format: 'esm',
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        nodeResolve(),
    ],

};

export default config;