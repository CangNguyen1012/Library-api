// src/application/queries/get-books.query.ts
import Database from '~/database'

export class GetBooksQuery {
  private constructor() {}

  static execute() {
    return Database.books
  }
}
