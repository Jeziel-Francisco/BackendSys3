import { Request, Response } from 'express';

import Business from './business';

import { IPersonInstance, IPersonAttributes } from '../../models/PersonModel';
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';

class Controller {
    constructor() { }

    async findById(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.findById(req['context'], req.params.id, PropertyToken(req).companyId);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            let data: IPersonInstance[] = await Business.findAll(req['context'], PropertyToken(req).companyId);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        let person: IPersonAttributes = req.body;
        person.companyId = PropertyToken(req).companyId;
        try {
            let data: IPersonInstance = await Business.create(req['context'], person);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async createBulk(req: Request, res: Response) {
        try {
            let data = await Business.createBulk(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: IPersonInstance = await Business.update(req['context'], req.params.id, req.body, PropertyToken(req).companyId);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller();