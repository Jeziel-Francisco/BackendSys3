import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { INoteAttibutes } from "../../models/NoteModel";
import Service from './service';

class Business {
    constructor() { }

    findById(db: IDbConnection, id: number, userId: number, companyId: number) {
        return Service.findById(db, id, userId, companyId);
    }

    findByPerson(db: IDbConnection, userId: number, companyId: number, personId: number) {
        return Service.findByPerson(db, userId, companyId, personId);
    }

    findAll(db: IDbConnection, userId: number, companyId: number) {
        return Service.findAll(db, userId, companyId);
    }

    create(db: IDbConnection, note: INoteAttibutes) {
        return Service.create(db, note);
    }

    update(db: IDbConnection, id: number, note: INoteAttibutes, userId: number, companyId: number) {
        return Service.update(db, id, note, userId, companyId);
    }

    remove(db: IDbConnection, id: number, userId: number, companyId: number) {
        return Service.remove(db, id, userId, companyId);
    }
}
export default new Business();