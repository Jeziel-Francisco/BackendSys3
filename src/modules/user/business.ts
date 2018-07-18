import CompanyService from './../company/service';
import Service from "./service";

import { compareSync } from "bcryptjs";
import { ICompanyAttributes } from "../../models/CompanyModel";
import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { Sign } from "../auth/auth";
import { IUserAttibutes, IUserInstance } from "../../models/UserModel";
import { UserSchema } from './../../schema/schema';


class Business {

    constructor() { }

    findById(db: IDbConnection, userId: number, id: number) {
        if (userId != id) throw new Error(`Id ${userId} not found !`);
        return Service.findById(db, id);
    }

    findByEmail(db: IDbConnection, email: string) {
        return Service.findByEmail(db, email);
    }

    findByUsername(db: IDbConnection, username: string) {
        return Service.findByUsername(db, username);
    }

    create(db: IDbConnection, user: IUserAttibutes) {
        return Service.create(db, user);
    }

    update(db: IDbConnection, userIdParam: number, user: IUserAttibutes, userIdAuth: number) {
        if (userIdParam != userIdAuth) throw new Error(`Id ${userIdParam} not found !`);
        return Service.update(db, userIdParam, user);
    }

    updatePassword(db: IDbConnection, userIdParam: number, password: string, userIdAuth: number, ) {
        if (userIdParam != userIdAuth) throw new Error(`Id ${userIdParam} not found !`);
        return Service.updatePassword(db, userIdParam, password);
    }

    remove(db: IDbConnection, id: number) {
        return Service.remove(db, id);
    }

    async auth(db: IDbConnection, auth: { username: string, password: string }) {
        let user: IUserInstance = await this.findByUsername(db, auth.username);
        if (!user) throw new Error('Username or Password Invalid !');
        let payload = {
            sub: user.get('id'),
            company: []
        };

        if (!compareSync(auth.password, user.password)) throw new Error('Username or Password Invalid !')

        let company = await CompanyService.findByUserId(db, user.get('id'));

        company.forEach((company: ICompanyAttributes) => {
            payload.company.push(company.id)
        });

        let token: any = await Sign(payload);

        return {
            userId: user.get('id'),
            company: payload.company,
            token: token
        };
    }
}


export default new Business();