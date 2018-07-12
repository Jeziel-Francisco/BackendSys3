import Business from './business';
import { Request, Response } from "express";
import { ICompanyInstance } from "../../models/CompanyModel";
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';
import { PropertyToken } from '../auth/auth';

class Controller {
    constructor() { }

    async findByUserId(req: Request, res: Response) {
        try {
            let data: ICompanyInstance[] = await Business.findByUserId(req['context'], PropertyToken(req).sub);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: ICompanyInstance = await Business.create(req['context'], req.body);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}
export default new Controller();