import esbuild from 'esbuild';
import path from 'path';

esbuild
  .build({
    entryPoints: [
      path.resolve(process.cwd(), 'app', 'index.ts'),
      path.resolve(process.cwd(), 'index.html'),
    ],
    bundle: true,
    outdir: 'dist',
    jsx: 'automatic',
    minify: true,
    treeShaking: true,
    splitting: true,
    sourcemap: true,
    format: 'esm',
    loader: {
      '.html': 'copy',
    },
  })
  .then(console.log)
  .catch(console.error);
