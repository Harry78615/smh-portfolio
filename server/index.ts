import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, '../../dist/client')));

// API routes
app.get('/api/test', (req, res) => {
  res.json({ status: 'working', time: new Date() });
});

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/client/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});