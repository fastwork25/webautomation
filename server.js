//ONLY OFFICE BACKENDS FINAL

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import express from 'express';

const app = express()


import Index from './routes/Index.js'

app.use(cors());

app.use(express.json())

app.use('/api', Index)


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
