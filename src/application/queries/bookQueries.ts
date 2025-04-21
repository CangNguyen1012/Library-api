import { PrismaClient } from '@prisma/client'
import { Request, RequestHandler, Response } from 'express'

export const getAllBooks = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        author: true,
        user: true
      }
    })
    res.json(books)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books', details: error })
  }
}

export const getBookById = (prisma: PrismaClient): RequestHandler => {
  const handler: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const book = await prisma.book.findUnique({
        where: { id },
        include: { author: true, user: true }
      })
      if (!book) {
        res.status(404).json({ error: 'Book not found' })
        return
      }
      res.json(book)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch book', details: error })
    }
  }
  return handler
}
