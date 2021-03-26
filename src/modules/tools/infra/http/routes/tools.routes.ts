import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ToolsController from '@modules/tools/infra/http/controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController;

toolsRouter.post('/', toolsController.create);

toolsRouter.get('/', async (request, response) => {
    return response.json({message: 'funciona'});
});

/*
toolsRouter.get('/', async (request, response) => {
    const findTools = getCustomRepository(ToolsRepository);
    const tools = await findTools.find();
    return response.json(tools)
});

toolsRouter.delete('/', async (request, response) => {
    const findTools = getCustomRepository(ToolsRepository);
    const tools = await findTools.delete({id:request.params.id});
    return response.json(tools)
});
*/
export default toolsRouter;