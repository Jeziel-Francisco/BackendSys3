import Business from './business';

import { IAddressAttibutes } from "../../models/AddressModel";
import { Request, Response } from "express";
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';

class Controller {
    constructor() { }

    async findByPersonId(req: Request, res: Response) {
        try {
            let data: IAddressAttibutes = await Business.findByPersonId(req['context'], req.params.id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: IAddressAttibutes = await Business.create(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async createBulk(req: Request, res: Response) {
        try {
            let data: IAddressAttibutes[] = await Business.createBulk(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            let data: IAddressAttibutes = await Business.update(req['context'], req.params.id, req.body);
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