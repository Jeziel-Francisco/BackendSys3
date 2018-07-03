import Service from "./service";

import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IUserAttibutes, IUserInstance } from "../../models/UserModel";
import { Sign } from "../auth/auth";


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
        if (!user) throw new Error('username or password invalid !');
        let payload = {
            sub: user.get('id'),
            companyId: user.get('companyId')
        };
        let token: any = await Sign(payload);
        token.payload.companyId = user.get('companyId');
        token.payload.userId = user.get('id');
        return token;
    }
}


export default new Business();