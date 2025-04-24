// src/infracstructure/repositories/user-repo.impl.ts
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

  async update(user: User): Promise<User> {
    const index = this.users.findIndex((u) => u.id === user.id)
    if (index !== -1) {
      this.users[index] = user
      return user
    }
    throw new Error('User not found')
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id)
    if (index !== -1) {
      this.users.splice(index, 1)
    } else {
      throw new Error('User not found')
    }
  }
}
