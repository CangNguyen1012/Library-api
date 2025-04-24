// src/infracstructure/repositories/book-repo.impl.ts
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

  async update(book: Book): Promise<Book> {
    const index = this.books.findIndex((b) => b.id === book.id)
    if (index !== -1) {
      this.books[index] = book
      return book
    }
    throw new Error('Book not found')
  }
  async delete(id: string): Promise<void> {
    const index = this.books.findIndex((book) => book.id === id)
    if (index !== -1) {
      this.books.splice(index, 1)
    } else {
      throw new Error('Book not found')
    }
  }
}
