import esbuild from 'esbuild';
import path from 'path';

esbuild
  .build({
    entryPoints: [
      path.resolve(process.cwd(), 'lib', 'index.ts'),
      path.resolve(process.cwd(), 'lib', 'math.ts'),
      path.resolve(process.cwd(), 'lib', 'string.ts'),
    ],
    bundle: true,
    outdir: 'dist-lib-cjs',
    jsx: 'automatic',
    minify: true,
    treeShaking: true,
    sourcemap: true,
    format: 'cjs',
    external: ['react', 'lodash'],
  })
  .then(console.log)
  .catch(console.error);
