import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const external = ['@esengine/nova-ecs', '@esengine/nova-ecs-editor'];

export default [
  // ES Module build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nova-ecs-core.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
      })
    ],
    external
  },
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nova-ecs-core.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false
      })
    ],
    external
  },
  // TypeScript declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nova-ecs-core.d.ts',
      format: 'es'
    },
    plugins: [dts()],
    external
  }
];