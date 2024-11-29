import express from 'express';
import { connectDB } from './db.js';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'
import cors from "cors"
import dotenv from "dotenv"

const app = express();

dotenv.config()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

connectDB()



app.use("/api", userRoutes)

// Sirve los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ruta para manejar las demás solicitudes y enviar el frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});


app.listen(3000, ()=> console.log('Server on port 3000'))