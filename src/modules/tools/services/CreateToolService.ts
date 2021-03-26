import Tools from '@modules/tools/infra/typeorm/entities/Tools';
import AppError from '@shared/errors/AppError';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository'
import { injectable, inject } from 'tsyringe';

interface IRequestDTO {
    title: string;
    link: string;
    description: string;
    tags: string;
}

@injectable()
class CreateToolService {
    constructor(
        @inject('ToolsRepository')
        private toolsRepository: IToolsRepository) {}

    public async execute({title, link, description, tags}: IRequestDTO): Promise<Tools> {

        const findTheSameTool = await this.toolsRepository.findByTitle(title)

        if(findTheSameTool) {
            throw new AppError('This tool already exists in our database')
        }

        const createTool = await this.toolsRepository.create({
            title,
            link,
            description,
            tags
        });

        return createTool;
    }
}

export default CreateToolService;