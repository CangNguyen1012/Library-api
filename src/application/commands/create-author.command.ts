import Database from '~/database'
import { Author } from '~/entities/author'

interface ParamsCreateAuthorCommand {
  name: string
  email: string
  penName?: string
}

export class CreateAuthorCommand {
  private constructor() {}

  static execute(params: ParamsCreateAuthorCommand): Author {
    const id = '1'
    const { name, email, penName } = params

    const author = new Author(id, name, email, penName)

    Database.authors.push(author)
    return author
  }
}
