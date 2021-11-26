import { babel } from '@rollup/plugin-babel';

const config = {
    input: 'src/index.js',
    output: {
        file: 'dist/main.js',
        format: 'esm',
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
    ],
    
};

export default config;