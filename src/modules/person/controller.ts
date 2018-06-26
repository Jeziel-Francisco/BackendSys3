import { Request, Response } from 'express';

import Business from './business';

import { IPersonInstance } from '../../models/PersonModel';
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';

class Controller {
    constructor() { }

    async findById(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.findById(req['context'], req.params.id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.create(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.update(req['context'], req.params.id, req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}