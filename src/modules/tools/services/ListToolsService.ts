import { injectable, inject } from 'tsyringe';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import Tools from '@modules/tools/infra/typeorm/entities/Tools';

interface IRequestDTO {
    tag: string;
}

@injectable()
class ListToolsService {
    constructor(
        @inject('ToolsRepository')
        private toolsRepository: IToolsRepository
    ) {}

    public async execute({tag}:IRequestDTO): Promise<Tools[]> {
        const tool = await this.toolsRepository.findAllTools(tag);
        return tool;
    }
}

export default ListToolsService;