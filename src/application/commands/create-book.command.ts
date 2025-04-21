import Database from '~/database'
import { Author } from '~/entities/author'
import { Book } from '~/entities/book'
import { User } from '~/entities/user'

interface ParamsCreateBookCommand {
  title: string
  userId: User
  authorId: Author
}

export class CreateBookCommand {
  private constructor() {}

  static execute(params: ParamsCreateBookCommand): Book {
    const id = Database.bookIdCounter.toString()
    Database.bookIdCounter += 1
    const { title, userId, authorId } = params

    const book = new Book(id, title, userId, authorId)

    Database.books.push(book)
    return book
  }
}
