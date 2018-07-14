import Business from './business';

import { ICityInstance } from "../../models/CityModel";
import { Request, Response } from "express";
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';

class Controller {
    
    constructor(){}

    async findAll(req: Request, res: Response) {
        try {
            let data: ICityInstance[] = await Business.finAll(req['context']);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller();