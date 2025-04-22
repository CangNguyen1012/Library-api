import Database from '~/database'
import { Author } from '~/entities/author'
import { IAuthorRepo } from '~/infracstructure/repositories/author.repo'

export class CreateAuthorCommand {
  constructor(private authorRepo: IAuthorRepo) {}

  async execute(name: string, email: string, penName?: string) {
    const author = Author.create((Database.authors.length + 1).toString(), name, email, penName)
    return await this.authorRepo.create(author)
  }
}
