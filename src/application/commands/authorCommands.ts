import { PrismaClient } from '@prisma/client'
import z from 'zod'
import { Request, Response } from 'express'

const authorSchema = z.object({
  userId: z.string(),
  penName: z.string().optional()
})

const updatedAuthorSchema = authorSchema.partial()

export const createAuthor = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const data = authorSchema.parse(req.body)
    const author = await prisma.author.create({ data })
    res.status(201).json(author)
  } catch (error) {
    res.status(400).json({ error: 'Invalid input or email already exists', details: error })
  }
}

export const updateAuthor = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = updatedAuthorSchema.parse(req.body)
    const author = await prisma.author.update({
      where: { id },
      data
    })
    res.json(author)
  } catch (error) {
    res.status(400).json({ error: 'Invalid input or author not found', details: error })
  }
}

export const deleteAuthor = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await prisma.author.delete({ where: { id } })
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: 'Author not found', details: error })
  }
}
