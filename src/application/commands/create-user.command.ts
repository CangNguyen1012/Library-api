import Database from '~/database'
import { User } from '~/entities/user'
import { IUserRepo } from '~/infracstructure/repositories/user.repo'

export class CreateUserCommand {
  constructor(private userRepo: IUserRepo) {}

  async execute(name: string, email: string) {
    const user = User.create((Database.users.length + 1).toString(), name, email)
    Database.users.push(user)
    return user
  }
}
