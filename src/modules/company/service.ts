import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { ICompanyAttributes } from "../../models/CompanyModel";

import { Op } from 'sequelize';

class Service {
    constructor() { }

    findById(db: IDbConnection, id: number) {
        return db.Company.findById(id);
    }

    findByUserId(db: IDbConnection, userId: number) {
        return db.Company.findAll({
            include: [
                { model: db.CompanyUser, where: { userId: userId } }
            ]
        });
    }

    create(db: IDbConnection, company: ICompanyAttributes) {
        return db.Company.create(company);
    }
}

export default new Service();