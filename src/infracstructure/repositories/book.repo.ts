// src/infracstructure/repositories/book.repo.ts
import { Book } from '~/entities/book'

export interface IBookRepo {
  create(book: Book): Promise<Book>
  findById(id: string): Promise<Book | null>
  findAll(): Promise<Book[]>
  update(book: Book): Promise<Book>
  delete(id: string): Promise<void>
}
