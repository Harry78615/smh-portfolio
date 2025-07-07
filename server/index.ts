import 'dotenv/config';
import express from 'express';
import { registerRoutes } from './routes';
import { serveStatic } from './vite';

// Create the Express app
const app = express();

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add your API routes
registerRoutes(app);

// Add the logic to serve the frontend files in production
if (process.env.NODE_ENV === 'production') {
  serveStatic(app);
}

// Export the app for Vercel to use
export default app;
