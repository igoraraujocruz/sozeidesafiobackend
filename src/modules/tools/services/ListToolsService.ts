import { injectable, inject } from 'tsyringe';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import Tools from '@modules/tools/infra/typeorm/entities/Tools';
import AppError from '@shared/errors/AppError';


interface IRequestDTO {
    tag?: string;
}

@injectable()
class ListToolsService {
    constructor(
        @inject('ToolsRepository')
        private toolsRepository: IToolsRepository
    ) {}

    public async execute({tag}:IRequestDTO): Promise<Tools[]> {
        const tool = await this.toolsRepository.findAllTools(tag);
        if (tool.length == 0) {
            throw new AppError(`I didn't find any tools with that tag`);
        }
        return tool;
    }
}

export default ListToolsService;