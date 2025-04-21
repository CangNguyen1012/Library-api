import Database from '~/database'

export class GetBooksQuery {
  private constructor() {}

  static execute() {
    return Database.books
  }
}
