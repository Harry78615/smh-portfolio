import express, { Express } from "express"; // Assuming Express type is needed
import path from "path";
import fs from "fs";

export function serveStatic(app: Express) {
    // Correct path: from server/ to project_root/dist/public
    // This resolves to /Users/abuzaid/smh-portfolio/dist/public
    const distPath = path.resolve(process.cwd(), "dist", "public");

    if (!fs.existsSync(distPath)) {
        throw new Error(
            `Could not find the build directory: ${distPath}. Make sure to build the client application.`
        );
    }
    app.use(express.static(distPath));
    // Fallback for single-page applications: serve index.html for all other routes
    app.use("*", (_req, res) => {
        res.sendFile(path.resolve(distPath, "index.html"));
    });
}

// Include your setupVite and log functions here as they were likely in this file
// Based on Screenshot 2025-07-04 at 9.41.51 PM.png and Screenshot 2025-07-04 at 9.49.14 PM.png
// if (app.get("env") === "development") { await setupVite(app, server); }
// means these functions need to be exported from this file.

// Example placeholder - please ensure these match your original file if different
export async function setupVite(app: Express, server: any) {
    // Your development Vite setup logic here
    console.log("Setting up Vite for development mode.");
}

export function log(message: string) {
    console.log(message);
}
