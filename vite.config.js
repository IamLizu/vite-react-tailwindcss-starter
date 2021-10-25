import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
    plugins: [react(), eslint({ cache: false })],
    server: {
        fs: {
            allow: [searchForWorkspaceRoot(process.cwd())]
        }
    }
});
