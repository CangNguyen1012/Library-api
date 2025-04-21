import express from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { createUser, deleteUser, updateUser } from './application/commands/userCommands'
import { getAllUsers, getUserById } from './application/queries/userQueries'
import { createAuthor, updateAuthor, deleteAuthor } from './application/commands/authorCommands'
import { getAllAuthors, getAuthorById } from './application/queries/authorQueries'
import { createBook, deleteBook, updateBook } from './application/commands/bookCommands'
import { getAllBooks, getBookById } from './application/queries/bookQueries'

dotenv.config()

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000

app.use(express.json())

// User Routes
app.post('/users', createUser(prisma))
app.get('/users', getAllUsers(prisma))
app.get('/users/:id', getUserById(prisma))
app.put('/users/:id', updateUser(prisma))
app.delete('/users/:id', deleteUser(prisma))

// Author Routes
app.post('/authors', createAuthor(prisma))
app.get('/authors', getAllAuthors(prisma))
app.get('/authors/:id', getAuthorById(prisma))
app.put('/authors/:id', updateAuthor(prisma))
app.delete('/authors/:id', deleteAuthor(prisma))

// Book Routes
app.post('/books', createBook(prisma))
app.get('/books', getAllBooks(prisma))
app.get('/books/:id', getBookById(prisma))
app.put('/books/:id', updateBook(prisma))
app.delete('/books/:id', deleteBook(prisma)) // Assuming you want to fetch a book by ID

app.get('/', (req, res) => {
  res.send('Library API is running')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
