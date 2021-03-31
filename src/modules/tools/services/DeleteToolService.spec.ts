import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import AppError from '@shared/errors/AppError';
import DeleteToolService from './DeleteToolService';

describe('CreateTool', () => {
    it('should be able to delete a tool', async () => {
        const fakeToolsRepository = new FakeToolsRepository();
        const deleteTool = new DeleteToolService(fakeToolsRepository)

        expect(deleteTool.execute).rejects.toBeInstanceOf(AppError);
    });        
});