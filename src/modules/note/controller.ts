import Business from './business';


import { INoteAttibutes } from '../../models/NoteModel';
import { Request, Response } from 'express';
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';

class Controller {
    constructor() { }

    async findById(req: Request, res: Response) {
        try {
            let data: INoteAttibutes = await Business.findById(req['context'], req.params.id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async findByPerson(req: Request, res: Response) {
        try {
            let data: INoteAttibutes = await Business.findByPerson(req['context'], PropertyToken(req).sub, PropertyToken(req).companyId, req.params.id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            let data: INoteAttibutes = await Business.findAll(req['context'], PropertyToken(req).sub, PropertyToken(req).companyId);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: INoteAttibutes = await Business.create(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: INoteAttibutes = await Business.update(req['context'], req.params.id, req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            let data = await Business.remove(req['context'], req.params.id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller(); 