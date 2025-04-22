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
}
