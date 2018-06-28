import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ICompanyAttributes } from "../../models/CompanyModel";

class Service {
    constructor() { }

    create(db: IDbConnection, company: ICompanyAttributes) {
        return db.Company.create(company);
    }
}

export default new Service();