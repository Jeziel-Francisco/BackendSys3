import Business from './business';

import { Request, Response } from 'express';

import { IUserInstance } from '../../models/UserModel';
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';

class Controller {
    constructor() { }

    async findById(req: Request, res: Response) {
        try {
            let data: IUserInstance = await Business.findById(req['context'], PropertyToken(req).sub);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    // sem rota de authenticacao
    async findByUsername(req: Request, res: Response) {
        try {
            let data: IUserInstance = await Business.findByUsername(req['context'], req.params.username);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    // sem rota de authenticacao
    async findByEmail(req: Request, res: Response) {
        try {
            let data: IUserInstance = await Business.findByEmail(req['context'], req.body.email);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }


    // sem rota de authenticacao
    async create(req: Request, res: Response) {
        try {
            let data: IUserInstance = await Business.create(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async auth(req: Request, res: Response) {
        try {
            let token = await Business.auth(req['context'], req.body);
            onSuccessResponse(res, token);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data = await Business.update(req['context'], PropertyToken(req).sub, req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async updatePassword(req: Request, res: Response) {
        try {
            let data = await Business.updatePassword(req['context'], PropertyToken(req).sub, req.body.password);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}

export default new Controller();