import Business from './business';
import { Request, Response } from "express";
import { ICompanyInstance } from "../../models/CompanyModel";
import { onSuccessResponse, onErrorResponse } from '../../utils/utils';

class Controller {
    constructor() { }

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