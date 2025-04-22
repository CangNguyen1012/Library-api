import { User } from '~/entities/user'
import Database from '~/database'
import { IUserRepo } from './user.repo'

export class UserRepo implements IUserRepo {
  private users: User[] = Database.users

  constructor() {
    this.users = Database.users
  }

  async create(user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)
    return user || null
  }
}
