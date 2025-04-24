// src/infracstructure/repositories/author.repo.ts
import { Author } from '../../entities/author'
export interface IAuthorRepo {
  create(author: Author): Promise<Author>
  findById(id: string): Promise<Author | null>
  findAll(): Promise<Author[]>
  update(author: Author): Promise<Author>
  delete(id: string): Promise<void>
}
