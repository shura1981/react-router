import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const envRoot = new URL('.', import.meta.url).pathname;
  const { VITE_BASE_URL } = loadEnv(mode, envRoot, '');

  return {
    base: VITE_BASE_URL || '/dev/dist/',
    plugins: [react()],
  };
});
