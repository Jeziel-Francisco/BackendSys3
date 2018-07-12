import Business from './business';


import { INoteAttibutes, INoteInstance } from '../../models/NoteModel';
import { Request, Response } from 'express';
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';

class Controller {
    constructor() { }

    async findByPerson(req: Request, res: Response) {
        try {
            let data: INoteInstance[] = await Business.findByPerson(req['context'], req.params.companyId, PropertyToken(req).sub, PropertyToken(req).company, req.params.personId);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            let data: INoteInstance[] = await Business.findAll(req['context'], req.params.companyId, PropertyToken(req).sub, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: INoteInstance = await Business.create(req['context'], req.body, PropertyToken(req).sub, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: INoteInstance = await Business.update(req['context'], req.params.id, req.body, PropertyToken(req).sub, PropertyToken(req).company);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller(); 