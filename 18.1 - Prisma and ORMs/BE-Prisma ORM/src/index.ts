import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createUser() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        }
    })
    console.log(user);
}

createUser();