// src/entities/book.ts
import { Author } from './author'
import { User } from './user'

export class Book {
  private _id: string
  private _title: string
  private _userId: User
  private _authorId: Author
  private _createdAt: Date
  private _updatedAt: Date

  constructor(id: string, title: string, userId: User, authorId: Author) {
    this._id = id
    this._title = title
    this._userId = userId
    this._authorId = authorId
    this._createdAt = new Date()
    this._updatedAt = new Date()
  }

  get id(): string {
    return this._id
  }
  get title(): string {
    return this._title
  }
  get userId(): User {
    return this._userId
  }
  get authorId(): Author {
    return this._authorId
  }
  get createdAt(): Date {
    return new Date(this._createdAt)
  }
  get updatedAt(): Date {
    return new Date(this._updatedAt)
  }

  set title(title: string) {
    this._title = title
  }

  set userId(userId: User) {
    this._userId = userId
  }

  set authorId(authorId: Author) {
    this._authorId = authorId
  }

  private updateTimestamp() {
    this._updatedAt = new Date()
  }

  displayInfo(): string {
    return `Book ID: ${this._id}, Title: ${this._title}, Author: ${this._authorId.penName}, User: ${this._userId.name}`
  }

  updateTitle(title: string): void {
    this._title = title
    this.updateTimestamp()
  }
  updateAuthor(authorId: Author): void {
    this._authorId = authorId
    this.updateTimestamp()
  }

  updateBookDetails(title?: string, userId?: User, authorId?: Author): void {
    if (title !== undefined) {
      this.title = title
    }
    if (userId !== undefined) {
      this.userId = userId
    }
    if (authorId !== undefined) {
      this.authorId = authorId
    }
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title,
      userId: this._userId,
      authorId: this._authorId,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt
    }
  }

  static create(id: string, title: string, userId: User, authorId: Author): Book {
    return new Book(id, title, userId, authorId)
  }
}
