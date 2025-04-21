import { PrismaClient } from '@prisma/client'
import { Request, RequestHandler, Response } from 'express'

export const getAllUsers = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ include: { books: true, author: true } })
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error })
  }
}

export const getUserById = (prisma: PrismaClient): RequestHandler => {
  const handler: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const user = await prisma.user.findUnique({
        where: { id },
        include: { books: true, author: true }
      })
      if (!user) {
        res.status(404).json({ error: 'User not found' })
        return
      }
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user', details: error })
    }
  }
  return handler
}
