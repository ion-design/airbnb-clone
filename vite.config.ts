import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, Plugin } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import ionBabelPlugin from "./ion-babel-plugin";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Debug logging
  console.log('🔍 Vite Config - Environment variables:');
  console.log('MODE:', mode);
  console.log('VITE_ENABLE_ION_JSX_SRC:', env.VITE_ENABLE_ION_JSX_SRC);
  console.log('Type:', typeof env.VITE_ENABLE_ION_JSX_SRC);
  console.log('Evaluated:', env.VITE_ENABLE_ION_JSX_SRC === 'true');

  // Create plugin options object
  const ionPluginOptions = {
    root: process.cwd(),
    enableIonJsxSrc: env.VITE_ENABLE_ION_JSX_SRC === 'true'
  };
  
  console.log('🔧 Ion Babel Plugin Options:', ionPluginOptions);

  return {
    // Expose env to the client
    define: {
      'process.env.VITE_ENABLE_ION_JSX_SRC': JSON.stringify(env.VITE_ENABLE_ION_JSX_SRC)
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [ionBabelPlugin, { ionOptions: ionPluginOptions }]
          ]
        }
      }),
      tsConfigPaths(),
    ],
  }
});
