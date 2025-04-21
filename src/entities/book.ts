export class Book {
  id: string
  title: string
  userId: string
  authorId: string
  createdAt: Date
  updatedAt: Date

  constructor(id: string, title: string, userId: string, authorId: string) {
    this.id = id
    this.title = title
    this.userId = userId
    this.authorId = authorId
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}
