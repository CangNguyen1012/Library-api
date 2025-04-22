// src/infracstructure/repositories/author.repo.ts
import { Author } from '../../entities/author'
export interface IAuthorRepo {
  create(author: Author): Promise<Author>
  findById(id: string): Promise<Author | null>
  findAll(): Promise<Author[]>
}
