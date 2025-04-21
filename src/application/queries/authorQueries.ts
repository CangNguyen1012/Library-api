import { PrismaClient } from '@prisma/client'
import { Request, RequestHandler, Response } from 'express'

export const getAllAuthors = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const authors = await prisma.author.findMany({ include: { user: true, books: true } })
    res.json(authors)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch authors', details: error })
  }
}

export const getAuthorById = (prisma: PrismaClient): RequestHandler => {
  const handler: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const author = await prisma.author.findUnique({
        where: { id },
        include: { user: true, books: true }
      })
      if (!author) {
        res.status(404).json({ error: 'Author not found' })
        return
      }
      res.json(author)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch author', details: error })
    }
  }
  return handler
}
