import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Mayk Brito",
        email: "maykbrito@gmail.com",
      },
      {
        name: "Diego Fernandes",
        email: "diego@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Seed completed");
  prisma.$disconnect();
});
