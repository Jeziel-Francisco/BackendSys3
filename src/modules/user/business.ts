import Service from "./service";

import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IUserAttibutes, IUserInstance } from "../../models/UserModel";
import { Sign } from "../auth/auth";
import CompanyService from './../company/service';
import { ICompanyAttributes } from "../../models/CompanyModel";
import { compareSync } from "bcryptjs";


class Business {

    constructor() { }

    findById(db: IDbConnection, id: number) {
        return Service.findById(db, id);
    }

    findByEmail(db: IDbConnection, email: string) {
        return Service.findByEmail(db, email);
    }

    findByUsername(db: IDbConnection, username: string) {
        return Service.findByUsername(db, username);
    }

    create(db: IDbConnection, model: IUserAttibutes) {
        return Service.create(db, model);
    }

    update(db: IDbConnection, model: IUserAttibutes, id: number) {
        return Service.update(db, id, model);
    }

    updatePassword(db: IDbConnection, password: string, id: number, ) {
        return Service.updatePassword(db, id, password);
    }

    remove(db: IDbConnection, id: number) {
        return Service.remove(db, id);
    }

    async auth(db: IDbConnection, auth: { username: string, password: string }) {
        let user: IUserInstance = await this.findByUsername(db, auth.username);
        if (!user) throw new Error('Username or Password Invalid !');
        let payload = {
            sub: user.get('id'),
            companyId: user.get('companyId')
        };

        if (compareSync(auth.password, user.password)) throw new Error('Username or Password Invalid !')

        let token: any = await Sign(payload);

        let company: ICompanyAttributes = await CompanyService.findById(db, user.get('companyId'));

        return {
            companyId: user.get('companyId'),
            userId: user.get('id'),
            companyName: company.name,
            companyFantasy: company.fantasy,
            userName: user.get('name'),
            token: token
        };
    }
}


export default new Business();