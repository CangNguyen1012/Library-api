// src/application/commands/create-book.command.ts
import Database from '~/database'
import { Author } from '~/entities/author'
import { Book } from '~/entities/book'
import { User } from '~/entities/user'
import { IBookRepo } from '~/infracstructure/repositories/book.repo'

export class CreateBookCommand {
  constructor(private bookRepo: IBookRepo) {}

  async execute(title: string, userId: User, authorId: Author) {
    const book = Book.create((Database.books.length + 1).toString(), title, userId, authorId)
    return await this.bookRepo.create(book)
  }
}
