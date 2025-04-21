import { User } from './user'

export class Author extends User {
  penName?: string

  constructor(id: string, name: string, email: string, penName?: string) {
    super(id, name, email)
    this.penName = penName
  }
}
