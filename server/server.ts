import express from 'express'
import path from 'path'
import bookRoutes from './routes/bookRoutes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', bookRoutes)
export default server
