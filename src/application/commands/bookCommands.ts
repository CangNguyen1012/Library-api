import { PrismaClient } from '@prisma/client'
import z from 'zod'
import { Request, Response } from 'express'

const bookSchema = z.object({
  title: z.string().min(1),
  userId: z.string(),
  authorId: z.string()
})

const updatedBookSchema = bookSchema.partial()

export const createBook = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const data = bookSchema.parse(req.body)
    const book = await prisma.book.create({ data })
    res.status(201).json(book)
  } catch (error) {
    res.status(400).json({ error: 'Invalid input or user/author already exists', details: error })
  }
}

export const updateBook = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = updatedBookSchema.parse(req.body)
    const book = await prisma.book.update({
      where: { id },
      data
    })
    res.json(book)
  } catch (error) {
    res.status(400).json({ error: 'Invalid input or book not found', details: error })
  }
}

export const deleteBook = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await prisma.book.delete({ where: { id } })
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: 'Book not found', details: error })
  }
}
