import { Request, Response } from 'express';

import Business from './business';

import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';
import { ISaleAttibutes } from '../../models/SaleModel';

class Controller {
    constructor() { }

    async findById(req: Request, res: Response) {

    }

    async create(req: Request, res: Response) {
        let sale: ISaleAttibutes = req.body;
        sale.companyId = PropertyToken(req).companyId;
        sale.userId = PropertyToken(req).sub;
        try {
            let data: ISaleAttibutes = await Business.create(req['context'], sale);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {

    }
}

export default new Controller();