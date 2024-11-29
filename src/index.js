import express from 'express';
import { connectDB } from './db.js';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'
import cors from "cors"
import dotenv from "dotenv"

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config()
app.use(cors({
    origin: 'https://maps-vkuj.onrender.com/',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json());

connectDB()

app.use("/api", userRoutes)

// Sirve los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ruta para manejar las demás solicitudes y enviar el frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});


app.listen(3000, ()=> console.log('Server on port 3000'))