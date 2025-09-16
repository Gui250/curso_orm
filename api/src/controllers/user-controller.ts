import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class UserController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return res.status(201).json(user);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    }); // exibe apenas um usuario baseado no id

    return res.json(user);
  }
}
