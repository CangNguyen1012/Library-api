import Database from '~/database'

export class GetAuthorsQuery {
  private constructor() {}

  static execute() {
    return Database.authors
  }
}
