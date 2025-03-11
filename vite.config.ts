import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, Plugin } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {

  // Debug logging
  console.log('🔍 Vite Config - Environment variables:');
  console.log('MODE:', mode);

  // Create plugin options object
  const ionPluginOptions = {
    enableIonJsxSrc: true 
  };
  
  console.log('🔧 Ion Babel Plugin Options:', ionPluginOptions);

  return {
    // Expose env to the client
    plugins: [
      react(),
      tsConfigPaths(),
    ],
  }
});
