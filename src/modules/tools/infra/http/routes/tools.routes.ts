import { Router } from 'express';
import ToolsController from '@modules/tools/infra/http/controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController;

toolsRouter.post('/', toolsController.create);

toolsRouter.get('/', toolsController.showTools);

toolsRouter.delete('/:id', toolsController.delete);

export default toolsRouter;