import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createRun(
    date: Date,
    distance: number, 
    duration: number,
    averagePace: string
) {
    await prisma.run.create({
        data: {
            date: date,
            distance: distance,
            duration: duration,
            averagePace: averagePace,
        },
    })
}

async function main() {
    await createRun(new Date('2024-05-08T00:00:00Z'), 5.2 , 1895, '6:05 km')
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
