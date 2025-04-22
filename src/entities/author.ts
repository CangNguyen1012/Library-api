// src/entities/author.ts
import { User } from './user'

export class Author extends User {
  private _penName?: string

  constructor(id: string, name: string, email: string, penName?: string) {
    super(id, name, email)
    this._penName = penName
  }

  get penName(): string | undefined {
    return this._penName
  }
  set penName(penName: string | undefined) {
    this._penName = penName
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      penName: this.penName
    }
  }

  updateProfile(name?: string, email?: string, penName?: string): void {
    super.updateProfile(name, email)
    if (penName !== undefined) {
      this.penName = penName
    }
  }

  static create(id: string, name: string, email: string, penName?: string): Author {
    return new Author(id, name, email, penName)
  }

  displayInfo(): string {
    return `Author ID: ${this.id}, Name: ${this.name}, Pen Name: ${this.penName}, Email: ${this.email}`
  }
}
