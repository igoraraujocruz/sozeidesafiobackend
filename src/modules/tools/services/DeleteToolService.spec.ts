import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import AppError from '@shared/errors/AppError';
import DeleteToolService from './DeleteToolService';
import CreateToolService from './CreateToolService';

describe('CreateTool', () => {
    it('should be able to delete one tool', async () => {
        const fakeToolsRepository = new FakeToolsRepository();
        const createTool = new CreateToolService(fakeToolsRepository);

        const tool = await createTool.execute({
            title: 'Node',
            description: 'plataform',
            link: "www.node.com",
            tags: ["plataform", "test"]
        });
    });        
});