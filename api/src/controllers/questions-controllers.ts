import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class QuestionsController {
  async index(req: Request, res: Response) {
    const questions = await prisma.question.findMany();
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
}
