import { Author } from '~/entities/author'
import { Book } from '~/entities/book'
import { User } from '~/entities/user'

export default class Database {
  public static books: Book[] = []
  public static authors: Author[] = []
  public static users: User[] = []

  public static bookIdCounter = 1
}
