import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class QuestionsController {
  async index(req: Request, res: Response) {
    const questions = await prisma.question.findMany({
      where: {
        title: {
          contains: req.query.title?.toString().trim(),
          mode: "insensitive",
        },
      },
    });

    return res.json(questions);
  }

  async create(req: Request, res: Response) {
    const { title, content, user_id } = req.body;

    // Validation
    if (!title || !content || !user_id) {
      return res.status(400).json({
        error: "Title, content, and user_id are required",
      });
    }

    const question = await prisma.question.create({
      data: {
        title,
        content,
        userId: user_id,
      },
    });

    return res.status(201).json(question);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, content } = req.body;

    const question = await prisma.question.update({
      where: { id },
      data: { title, content },
    });

    return res.json(question);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.question.delete({
      where: { id },
    });

    return res.status(204).send();
  }
}
