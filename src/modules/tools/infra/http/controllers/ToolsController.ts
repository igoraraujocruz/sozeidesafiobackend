import { Request, Response } from 'express';
import {container} from 'tsyringe';
import CreateToolService from '@modules/tools/services/CreateToolService'
import ListToolsService from '@modules/tools/services/ListToolsService';
import DeleteToolService from '@modules/tools/services/DeleteToolService';


export default class ToolsController {
    public async create(request: Request, response: Response): Promise<Response> {

        const {title, link, description, tags} = request.body;
        const createTool = container.resolve(CreateToolService)
        const tool = await createTool.execute({title, link, description, tags})
        return response.json(tool).status(201);

    }

    public async showTools(request: Request, response: Response): Promise<Response> {

        const tag = request.query;
        const listTools = container.resolve(ListToolsService)
        const tool = await listTools.execute(tag)
        return response.json(tool);

    }

    public async delete(request: Request, response: Response): Promise<Response> {

        const {id} = request.params;
        const listTools = container.resolve(DeleteToolService)
        await listTools.execute(id)
        return response.json({message:"The tool has been successfully deleted"}).status(200);

    }
}

