import { PrismaClient } from '@prisma/client'
import z from 'zod'
import { Request, Response } from 'express'

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email()
})

const updatedUserSchema = userSchema.partial()

export const createUser = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const data = userSchema.parse(req.body)
    const user = await prisma.user.create({ data })
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: 'Invalid input or email already exists', details: error })
  }
}

export const updateUser = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = updatedUserSchema.parse(req.body)
    const user = await prisma.user.update({
      where: { id },
      data
    })
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: 'Invalid input or user not found', details: error })
  }
}

export const deleteUser = (prisma: PrismaClient) => async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await prisma.user.delete({ where: { id } })
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: 'User not found', details: error })
  }
}
