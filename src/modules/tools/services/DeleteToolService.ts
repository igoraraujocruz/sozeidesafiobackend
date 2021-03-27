import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';

@injectable()
class DeleteToolService {
    constructor(
        @inject('ToolsRepository')
        private toolsRepository: IToolsRepository
    ) {}

    public async execute(id: string): Promise<null | void> {
        const tool = await this.toolsRepository.findById(id);
        if(!tool) {
            throw new AppError('Tool not Found');
        }
        await this.toolsRepository.delete(id);
        
    }
}

export default DeleteToolService;