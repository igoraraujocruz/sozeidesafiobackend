import Tools from '@modules/tools/infra/typeorm/entities/Tools';
import IToolsReposiroty from '@modules/tools/repositories/IToolsRepository';
import { Repository, getRepository } from 'typeorm'; 
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';


class ToolsRepository implements IToolsReposiroty {

    private ormRepository: Repository<Tools>;

    constructor() {
        this.ormRepository = getRepository(Tools);
    }

    public async create({title, link, description, tags}: ICreateToolDTO): Promise<Tools> {
		const user = this.ormRepository.create({title, link, description, tags});
		await this.ormRepository.save(user);
		return user;
	}

    public async save(tool: Tools): Promise<Tools> {
		return this.ormRepository.save(tool);
	}
}

export default ToolsRepository;