import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import Tools from '@modules/tools/infra/typeorm/entities/Tools';

@injectable()
class ListToolsService {
    constructor(
        @inject('ToolsRepository')
        private toolsRepository: IToolsRepository
    ) {}

    public async execute(): Promise<Tools[]> {
        const tool = await this.toolsRepository.findAllTools();
        return tool;
    }
}

export default ListToolsService;