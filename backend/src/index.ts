import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
// import { productRouter } from './routers/productRouter'
import seedRouter from './routers/seedRouter'

dotenv.config()
const app = express()

const MONGODB_URI = process.env.MONGO_URI || "mongodb+srv://kritijulia:zynetics123@zyneticscol.3rjran9.mongodb.net/"
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })


app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use('/api/seed',seedRouter);


app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts)
})

app.get('/api/products/:slug', (req: Request, res: Response) => {
  res.json(sampleProducts.find((x) => x.slug === req.params.slug))
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
