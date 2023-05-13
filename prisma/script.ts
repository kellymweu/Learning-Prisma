import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({log : ["query"]}); to log queries on terminal
async function main() {
  // await prisma.user.deleteMany();
  //const users = await prisma.user.createMany({
  const user = await prisma.user.findMany({
    where: {
      name: { in: "Sally" },
      age: { lt: 20 },
    },
    
  });

  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  /*
  orderBy: {
    age: "desc",
  },
  take: 2,
  skip: 1,

  */