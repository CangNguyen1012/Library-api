// src/infracstructure/repositories/user.repo.ts
import { User } from '~/entities/user'

export interface IUserRepo {
  create(user: User): Promise<User>
  findById(id: string): Promise<User | null>
  findAll(): Promise<User[]>
  update(user: User): Promise<User>
  delete(id: string): Promise<void>
}
