import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/se_final_project_frontend/Digital_Fusion",
  plugins: [react()],
});
