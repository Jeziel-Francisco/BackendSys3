import Business from './business';

import { IAddressInstance } from "../../models/AddressModel";
import { Request, Response } from "express";
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';

class Controller {
    constructor() { }

    async create(req: Request, res: Response) {
        try {
            let data: IAddressInstance = await Business.create(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async createBulk(req: Request, res: Response) {
        try {
            let data: IAddressInstance[] = await Business.createBulk(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: IAddressInstance = await Business.update(req['context'], req.params.id, req.body);
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