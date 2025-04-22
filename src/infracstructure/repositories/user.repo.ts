import { User } from '~/entities/user'

export interface IUserRepo {
  create(user: User): Promise<User>
  findById(id: string): Promise<User | null>
  findAll(): Promise<User[]>
}
