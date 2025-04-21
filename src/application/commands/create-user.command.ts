import Database from '~/database'
import { User } from '~/entities/user'

interface ParamsCreateUserCommand {
  name: string
  email: string
}

export class CreateUserCommand {
  private constructor() {}

  static execute(params: ParamsCreateUserCommand): User {
    const id = '1'
    const { name, email } = params

    const user = new User(id, name, email)

    Database.users.push(user)
    return user
  }
}
