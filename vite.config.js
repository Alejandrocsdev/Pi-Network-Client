import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
	const { SANDBOX_SLUG, PORT } = env

  // Mode
  console.info('Mode:', mode);

  // Sandbox
  if (mode === 'development') {
    console.info('Sandbox URL:', `https://sandbox.minepi.com/app/${SANDBOX_SLUG}`);
  }

  return {
    plugins: [react()],
    server: { host: true, port: Number(PORT) },
  };
});
