import Tools from '@modules/tools/infra/typeorm/entities/Tools';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';
import {uuid} from 'uuidv4';



export default class FakeToolsRepository implements IToolsRepository {

    private tools: Tools[] = [];

    public async create({title, link, description, tags}: ICreateToolDTO): Promise<Tools> {
		const tool = new Tools()
        Object.assign(tool, {id: uuid(), title, description, link, tags})
		this.tools.push(tool)
		return tool;
	}

	public async delete(id:string): Promise<void | undefined> {
		this.tools = this.tools.filter(tool => tool.id !== id);
	}

  	public async findByTitle(title: string): Promise<Tools | undefined> {
		const findTitle = this.tools.find(
            object => object.title === title,
        );
        return findTitle;    
	  }

	public async findById(id: string): Promise<Tools | undefined> {
		const findId = this.tools.find(
            tool => tool.id == id,
        );

        return findId
	}

    public async findAllTools(tags?:string): Promise<Tools[]> {
		return this.tools.filter(tool => tool.id !== tags);
	}

    public async save(tool: Tools): Promise<Tools> {
		const findIndex = this.tools.findIndex(findTool => findTool.id == tool.id);
        this.tools[findIndex] = tool;
        return tool;
	}
}