// import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const config = {
    input: 'src/index.js',
    output: {
        file: 'dist/chrome_extension/verifier.js',
    },
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        // babel({ babelHelpers: 'bundled' }),
    ],
};

export default config;