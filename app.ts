import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
const app = express();
import mongoose from 'mongoose';
dotenv.config();
const port : Number = Number(process.env.PORT);
const dbURL : string = process.env. MONGO_DB_URL as string;

app.use(express.json());
app.use(morgan('dev'));

// ROUTES

// Admin routes
import adminRoutes from "./src/routes/admin/index.routes";
app.use('/api/admin', adminRoutes);

// User routes
import userRoutes from "./src/routes/user/index.routes";
app.use('/api/user', userRoutes);


// DATABASE CONNECTION                                                         // Online Database
app.listen(port , async () => {
    mongoose.connect(dbURL)
    .then(() => console.log('Db is connected...'))
    .catch (err => console.log(err.message));
    console.log(`Server Start at http://localhost:${port}`);
});