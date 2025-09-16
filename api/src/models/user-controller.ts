import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export class UserController {
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
}
