import { IUserAttibutes, IUserInstance } from "../../models/UserModel";

import { Transaction } from "sequelize";
import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

class Service {

    constructor() { }

    findById(db: IDbConnection, id: number) {
        return db.User.findById(id as number);
    }
    
    findByEmail(db: IDbConnection, email: string) {
        return db.User.findOne({ where: { email: email } });
    }

    create(db: IDbConnection, model: IUserAttibutes) {
        return db.User.create(model);
    }

    async update(db: IDbConnection, id: number, model: IUserAttibutes) {
        let user: IUserInstance = await db.User.findById(id);

        if (!user) throw new Error('Id not found');

        return await user.update(model);
    }

    async updatePassword(db: IDbConnection, id: number, password: string) {
        let user: IUserInstance = await db.User.findById(id);

        if (!user) throw new Error('Id not found');

        await user.update({ password: password });
        return true;
    }

    async remove(db: IDbConnection, id: number) {
        let user: IUserInstance = await db.User.findById(id);

        if (!user) throw new Error('Id not found');

        return await user.destroy();
    }
}

export default new Service();