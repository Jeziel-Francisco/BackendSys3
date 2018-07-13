import { Request, Response } from 'express';

import Business from './business';

import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';
import { ISaleAttibutes, ISaleInstance } from '../../models/SaleModel';

class Controller {
    constructor() { }

    async findAllCompanyUsers(req: Request, res: Response) {
        try {
            let data: ISaleInstance[] = await Business.findAllCompanyUsers(req['context'], PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        let sale: ISaleAttibutes = req.body;
        sale.userId = PropertyToken(req).sub;
        try {
            let data: ISaleInstance = await Business.create(req['context'], sale, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: ISaleInstance = await Business.update(req['context'], req.params.id, req.body, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }

    }
}

export default new Controller();