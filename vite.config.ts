import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

function copyDirRecursive(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'static-multipage-cpanel-sync',
        closeBundle() {
          const rootDir = __dirname;
          const distDir = path.resolve(rootDir, 'dist');
          fs.mkdirSync(distDir, { recursive: true });
          for (const file of fs.readdirSync(rootDir)) {
            if (file.endsWith('.html')) {
              fs.copyFileSync(path.join(rootDir, file), path.join(distDir, file));
            }
          }
          copyDirRecursive(path.join(rootDir, 'assets'), path.join(distDir, 'assets'));
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    }
  };
});
