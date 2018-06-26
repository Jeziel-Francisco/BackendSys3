import Service from "./service";

import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { IUserAttibutes, IUserInstance } from "../../models/UserModel";
import { Sign } from "../auth/auth";


class Business {

    constructor() { }

    async findById({ db }: { db: IDbConnection }, id: number) {
        return await Service.findById(db, id);
    }

    async findByEmail({ db }: { db: IDbConnection }, email: string) {
        return await Service.findByEmail(db, email);
    }

    async create({ db }: { db: IDbConnection }, model: IUserAttibutes) {
        console.log(model);
        return await Service.create(db, model);
    }

    async update({ db }: { db: IDbConnection }, model: IUserAttibutes, id: number) {
        return await Service.update(db, id, model);
    }

    async updatePassword({ db }: { db: IDbConnection }, password: string, id: number, ) {
        return await Service.updatePassword(db, id, password);
    }

    async remove({ db }: { db: IDbConnection }, id: number) {
        return await Service.remove(db, id);
    }

    async auth({ db }: { db: IDbConnection }, auth: { email: string, password: string }) {
        let user: IUserInstance = await this.findByEmail({ db: db }, auth.email);
        if (!user) throw new Error('email or password invalid !');
        let payload = { sub: user.get('id') }
        return await Sign(payload)
    }
}


export default new Business();