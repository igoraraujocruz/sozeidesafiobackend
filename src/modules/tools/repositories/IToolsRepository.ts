import Tools from '@modules/tools/infra/typeorm/entities/Tools'
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

export default interface IToolsReposiroty {
    create(data: ICreateToolDTO): Promise<Tools>
}