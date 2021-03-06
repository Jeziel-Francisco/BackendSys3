import { Request, Response } from 'express';

import Business from './business';

import { IPersonInstance } from '../../models/PersonModel';
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';

class Controller {
    constructor() { }

    async findAll(req: Request, res: Response) {
        try {
            let data: IPersonInstance[] = await Business.findAll(req['context'], req.params.companyId, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.create(req['context'], req.body, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.update(req['context'], req.params.id, req.body, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller();