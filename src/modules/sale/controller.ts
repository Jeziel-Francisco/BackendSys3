import { Request, Response } from 'express';

import Business from './business';

import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';
import { ISaleAttibutes, ISaleInstance } from '../../models/SaleModel';
import { ISaleProductAttibutes, ISaleProductInstance } from '../../models/SaleProductModel';

class Controller {
    constructor() { }

    async findByCompanyId(req: Request, res: Response) {
        let companyId = PropertyToken(req).companyId;
        try {
            let data: ISaleInstance[] = await Business.findByCompanyId(req['context'], companyId);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async createSale(req: Request, res: Response) {
        let sale: ISaleAttibutes = req.body;
        sale.companyId = PropertyToken(req).companyId;
        sale.userId = PropertyToken(req).sub;
        try {
            let data: ISaleInstance = await Business.createSale(req['context'], sale);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async updateSale(req: Request, res: Response) {
        try {
            let data: ISaleInstance = await Business.updateSale(req['context'], req.params.id, PropertyToken(req).companyId, req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }

    }

    async createSaleProduct(req: Request, res: Response) {
        try {
            let data: ISaleProductInstance = await Business.createSaleProduct(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async createBulkSaleProduct(req: Request, res: Response) {
        try {
            let data: ISaleProductInstance[] = await Business.createBulkSaleProduct(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller();