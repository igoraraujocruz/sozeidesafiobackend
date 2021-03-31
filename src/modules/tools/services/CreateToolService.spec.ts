import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import AppError from '@shared/errors/AppError';

describe('CreateTool', () => {
    it('should be able to create a tool', async () => {
        const fakeToolsRepository = new FakeToolsRepository();
        const createTool = new CreateToolService(fakeToolsRepository);

        const tool = await createTool.execute({
            title: 'Node',
            description: 'plataform',
            link: "www.node.com",
            tags: "javascript"
        });

        expect(tool).toHaveProperty('id');
    });

    it('should not be able to create two tools with the same title', async () => {
        const fakeToolsRepository = new FakeToolsRepository();
        const createTool = new CreateToolService(fakeToolsRepository);

        await createTool.execute({
            title: 'Insomnia',
            description: 'program',
            link: "www.insomnia.com",
            tags: "tests"
        });

        expect(
            createTool.execute({
                title: 'Insomnia',
                description: 'program',
                link: "www.insomnia.com",
                tags: "tests"
            }),
        ).rejects.toBeInstanceOf(AppError);
    })
});