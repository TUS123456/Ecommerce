import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'; // Corrected import
import cors from 'cors';

const app = express();

// Configure env
dotenv.config();

// Database ConnectDB
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/auth', authRoutes);

app.get('/', (req, resp) => {
    resp.send({
        message: 'Welcome To ecommerce app'
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
