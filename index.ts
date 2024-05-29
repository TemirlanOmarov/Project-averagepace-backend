import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type RunCreateType = {
    id: number;
    date: string,
    averagePace: string
    duration: number,
    distance: number, 
}

async function createRun(
    data: RunCreateType
) {
    await prisma.run.create({
        data: {
            id: data.id,
            date: data.date,
            distance: data.distance,
            duration: data.duration,
            averagePace: data.averagePace,
        },
    })
    console.log(`Run with id ${data.id} was created`)
}

async function reset() {
    await prisma.run.deleteMany({});
    console.log("All run history deleted")
}

async function listRuns () {
    const runs =  await prisma.run.findMany();
    console.log(runs);
 }
 async function getRun(id: number) {
    const run = await prisma.run.findUnique({
        where: { id: id },
    });
    console.log(run);
}
async function updateRun(id: number, data: Partial<RunCreateType>) {
    try {
        const updatedRun = await prisma.run.update({
            where: { id: id },
            data: data,
        });
        console.log(`Run with id ${id} was updated`, updatedRun);
    } catch (error) {
        console.error(`Failed to update run with id ${id}:`, error);
    }
}
    async function deleteRun(id:number) {
        try {
            const deletedRun = await prisma.run.delete ({
                where:{id:id},
            });
            console.log(`Run with id ${id} was deleted`,deleteRun);
        } catch(error) {
            console.error(`Failed to delete run with id :${id}`,error);
        }
    }

// createRun(data: RunCreateType)
// listRuns()
// getRun(id: string)
// updateRun(id: string)
// deleteRun(id: string)

async function main() {
    await reset();
    await createRun({
        id: 1,
        date: '2024-01-08T00:00:00Z',
        duration: 1700,
        averagePace: '2:05 km',
        distance: 5,
    });

    await createRun({
        id: 2,
        date: '2023-05-08T00:00:00Z',
        duration: 1800,
        averagePace: '6:08 km',
        distance: 5.1,
    });

    await createRun({
        id: 3,
        date: '2022-05-08T00:00:00Z',
        duration: 1555,
        averagePace: '6:05 km',
        distance: 3.2,
    });

    await listRuns();
    await getRun(3);
    await updateRun(1, { duration: 1600, averagePace: '5:30 km' });
    await deleteRun(2);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
   

