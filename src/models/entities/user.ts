export class User {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date

  constructor(id: string, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}
