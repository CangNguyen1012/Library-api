import Database from '~/database'
import { IBookRepo } from './book.repo'
import { Book } from '~/entities/book'

export class BookRepo implements IBookRepo {
  private books: Book[] = Database.books

  constructor() {
    this.books = Database.books
  }

  async create(book: Book): Promise<Book> {
    this.books.push(book)
    return book
  }

  async findAll(): Promise<Book[]> {
    return this.books
  }

  async findById(id: string): Promise<Book | null> {
    const book = this.books.find((book) => book.id === id)
    return book || null
  }
}
