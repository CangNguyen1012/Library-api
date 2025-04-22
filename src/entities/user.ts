// src/entities/user.ts
export class User {
  private _id: string
  private _name: string
  private _email: string
  private _createdAt: Date
  private _updatedAt: Date

  constructor(id: string, name: string, email: string) {
    if (!id || id.trim() === '') {
      throw new Error('User ID cannot be empty')
    }

    if (!name || name.trim() === '') {
      throw new Error('User name cannot be empty')
    }

    if (!email || !this.isValidEmail(email)) {
      throw new Error('Invalid email format')
    }
    this._id = id
    this._name = name
    this._email = email
    this._createdAt = new Date()
    this._updatedAt = new Date()
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get email(): string {
    return this._email
  }

  get createdAt(): Date {
    return new Date(this._createdAt)
  }

  get updatedAt(): Date {
    return new Date(this._updatedAt)
  }

  set name(newName: string) {
    if (!newName || newName.trim() === '') {
      throw new Error('User name cannot be empty')
    }
    this._name = newName
    this.updateTimestamp()
  }

  set email(newEmail: string) {
    if (!this.isValidEmail(newEmail)) {
      throw new Error('Invalid email format')
    }
    this._email = newEmail
    this.updateTimestamp()
  }

  updateProfile(name?: string, email?: string): void {
    if (name !== undefined) {
      this.name = name
    }

    if (email !== undefined) {
      this.email = email
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  private updateTimestamp(): void {
    this._updatedAt = new Date()
  }

  toJSON(): object {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt
    }
  }

  static create(id: string, name: string, email: string): User {
    return new User(id, name, email)
  }

  displayInfo(): string {
    return `User ID: ${this._id}, Name: ${this._name}, Email: ${this._email}`
  }
}
