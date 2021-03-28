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
		const tool = this.ormRepository.create({title, link, description, tags});
		await this.ormRepository.save(tool);
		return tool;
	}

	public async delete(id:string): Promise<void | undefined> {
		this.ormRepository.delete(id);
	}

  	public async findByTitle(title: string): Promise<Tools | undefined> {
		const findTitle = await this.ormRepository.findOne({
      where: {title},
    });

		return findTitle;
	}

	public async findById(id: string): Promise<Tools | undefined> {
		const findId = await this.ormRepository.findOne({
      where: {id},
    });

		return findId;
	}

  public async findAllTools(tags?:string): Promise<Tools[]> {
		let tools: Tools[];	

		if(tags) {
			tools = await this.ormRepository.find({
				where: {tags}
			});
		} else {
			tools = await this.ormRepository.find();
		}

		return tools;
 }

    public async save(tool: Tools): Promise<Tools> {
		return this.ormRepository.save(tool);
	}
}

export default ToolsRepository;