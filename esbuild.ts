import esbuild from 'esbuild';
import path from 'path';

esbuild
  .build({
    entryPoints: [path.resolve(process.cwd(), 'app', 'index.ts')],
    bundle: true,
    outdir: 'dist',
    jsx: 'automatic',
    minify: true,
    treeShaking: true,
    splitting: true,
    sourcemap: true,
    format: 'esm',
    external: ['react', 'react-dom', 'react-router'],
  })
  .then(console.log)
  .catch(console.error);
