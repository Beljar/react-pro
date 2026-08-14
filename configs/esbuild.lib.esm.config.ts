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
    outdir: 'dist-lib-esm',
    jsx: 'automatic',
    minify: true,
    treeShaking: true,
    sourcemap: true,
    format: 'esm',
    external: ['react', 'lodash'],
  })
  .then(console.log)
  .catch(console.error);
