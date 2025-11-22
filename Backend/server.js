const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

console.log('Starting server...');
console.log('__dirname:', __dirname);

dotenv.config({ path: path.join(__dirname, '.env') });

console.log('Environment variables loaded');
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:5173', 'http://localhost:3000'];
console.log('Allowed Origins:', allowedOrigins);

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

// routes
let authRouter;
try {
  authRouter = require('./routes/auth');
  console.log('Auth router loaded successfully');
} catch (err) {
  console.error('Error loading auth router:', err.message);
  process.exit(1);
}

app.use('/api/auth', authRouter);

// logs route
try {
	const logsRouter = require('./routes/logs');
	app.use('/api/logs', logsRouter);
	console.log('Logs router loaded');
} catch (err) {
	console.error('Error loading logs router:', err.message);
}

app.get('/api/health', (req, res) => res.json({ ok: true }));

mongoose.set('strictQuery', true);

// Start server first, then connect to MongoDB
const server = app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	// Connect to MongoDB in the background
	mongoose.connect(process.env.MONGO_URI)
		.then(() => console.log('MongoDB connected'))
		.catch((err) => console.error('MongoDB connection error:', err.message));
});

// Handle server errors
server.on('error', (err) => {
	console.error('Server error:', err);
});

// Uncaught exception handler
process.on('uncaughtException', (err) => {
	console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
