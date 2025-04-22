import { Book } from '~/entities/book'

export interface IBookRepo {
  create(book: Book): Promise<Book>
  findById(id: string): Promise<Book | null>
  findAll(): Promise<Book[]>
}
