import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ICompanyAttributes } from "../../models/CompanyModel";

class Service {
    constructor() { }

    findById(db: IDbConnection, id: number) {
        return db.Company.findById(id);
    }

    create(db: IDbConnection, company: ICompanyAttributes) {
        return db.Company.create(company);
    }
}

export default new Service();