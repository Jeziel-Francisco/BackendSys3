import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ICompanyAttributes } from "../../models/CompanyModel";
import Service from "./service";

class Business {
    constructor() { }

    findByUserId(db: IDbConnection, userIdParam: number, userIdAuth: number) {
        if (userIdAuth != userIdParam) throw new Error(`Id ${userIdParam} not fount !`);
        return Service.findByUserId(db, userIdParam);
    }

    create(db: IDbConnection, company: ICompanyAttributes) {
        return Service.create(db, company);
    }
}
export default new Business();