// src/infracstructure/repositories/author-repo.impl.ts
import Database from '~/database'
import { Author } from '~/entities/author'
import { IAuthorRepo } from './author.repo'

export class AuthorRepo implements IAuthorRepo {
  private authors: Author[] = Database.authors

  constructor() {
    this.authors = Database.authors
  }

  async create(author: Author): Promise<Author> {
    this.authors.push(author)
    return author
  }

  async findAll(): Promise<Author[]> {
    return this.authors
  }

  async findById(id: string): Promise<Author | null> {
    const author = this.authors.find((author) => author.id === id)
    return author || null
  }

  async update(author: Author): Promise<Author> {
    const index = this.authors.findIndex((a) => a.id === author.id)
    if (index !== -1) {
      this.authors[index] = author
      return author
    }
    throw new Error('Author not found')
  }

  async delete(id: string): Promise<void> {
    const index = this.authors.findIndex((author) => author.id === id)
    if (index !== -1) {
      this.authors.splice(index, 1)
    } else {
      throw new Error('Author not found')
    }
  }
}
