import express from 'express';
import { connectDB } from './db.js';
import { User } from './models/user.model.js';
import userRoutes from './routes/user.routes.js'
import cors from "cors"

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

connectDB()


User.sync()

app.use("/api", userRoutes)



app.listen(3000, ()=> console.log('Server on port 3000'))