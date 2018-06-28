import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ICompanyAttributes } from "../../models/CompanyModel";
import Service from "./service";

class Business {
    constructor() { }

    create(db: IDbConnection, company: ICompanyAttributes) {
        return Service.create(db, company);
    }
}
export default new Business();