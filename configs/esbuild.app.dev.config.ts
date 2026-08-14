import esbuild from 'esbuild';
import path from 'path';
(async () => {
  try {
    let ctx = await esbuild.context({
      entryPoints: [
        path.resolve(process.cwd(), 'app', 'index.ts'),
        path.resolve(process.cwd(), 'index.html'),
      ],
      bundle: true,
      outdir: 'dist',
      jsx: 'automatic',
      treeShaking: true,
      splitting: true,
      sourcemap: true,
      format: 'esm',
      loader: {
        '.html': 'copy', // Tells esbuild to copy the file directly to outdir
      },
    });
    await ctx.watch();
    let { hosts, port } = await ctx.serve();
    console.log(`started at ${hosts[0]}:${port}`);
  } catch (e) {
    console.log(e);
  }
})();
