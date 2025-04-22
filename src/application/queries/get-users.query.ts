import Database from '~/database'

export class GetUsersQuery {
  private constructor() {}

  static execute() {
    return Database.users
  }
}
