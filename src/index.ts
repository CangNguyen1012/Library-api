import express from 'express'
// import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { CreateUserCommand } from './application/commands/create-user.command'
import { CreateAuthorCommand } from './application/commands/create-author.command'
import { CreateBookCommand } from './application/commands/create-book.command'
import { GetBooksQuery } from './application/queries/get-books.query'
import { AuthorRepo } from './infracstructure/repositories/author-repo.impl'
import { BookRepo } from './infracstructure/repositories/book-repo.impl'
import { UserRepo } from './infracstructure/repositories/user-repo.impl'

dotenv.config()

const app = express()
// const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Library API is running')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

async function main() {
  const userRepo = new UserRepo()
  const authorRepo = new AuthorRepo()
  const bookRepo = new BookRepo()

  const createUserCommand = new CreateUserCommand(userRepo)
  const createAuthorCommand = new CreateAuthorCommand(authorRepo)
  const createBookCommand = new CreateBookCommand(bookRepo)

  const user = await createUserCommand.execute('John Doe', 'johndoe@gmail.com')

  const author = await createAuthorCommand.execute('John Doe', 'johndoe@gmail.com', 'JD')

  await createBookCommand.execute('The Great Book', user, author)
  await createBookCommand.execute('Another Great Book', user, author)

  const books = GetBooksQuery.execute()
  console.log(books)
}

main()
