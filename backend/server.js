// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const productRoutes = require('./routes/productRoutes');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// // Connect to DB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/products', productRoutes);
// app.use('/api/auth', authRoutes);

// // Server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const path = require('path'); // ✅ Required to serve frontend
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// ✅ Serve frontend (React) from /frontend/build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// ✅ Catch-all for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
