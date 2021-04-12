import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default [{
        input: './src/FjedreApp.ts',
        plugins: [
            typescript({ tsconfig: 'tsconfig.development.json' }),
            resolve(),
            serve({
                contentBase: 'development',
                open: true
            }),
            livereload()
        ],
        output: {
            file: './development/FjedreApp.js',
            format: 'esm',
            sourcemap: 'inline'
        }
    }
]
