import { Request, Response } from 'express';
import {container} from 'tsyringe';
import CreateToolService from '@modules/tools/services/CreateToolService'

export default class ToolsController {
    public async create(request: Request, response: Response): Promise<Response> {

        const {title, link, description, tags} = request.body;
        const createTool = container.resolve(CreateToolService)
        const tool = await createTool.execute({title, link, description, tags})
        return response.json(tool).status(201);

    }
}

