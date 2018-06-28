import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { INoteAttibutes } from "../../models/NoteModel";
import Service from './service';

class Business {
    constructor() { }
    
    findById(db: IDbConnection, id: number) {
        return Service.findById(db, id);
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

    update(db: IDbConnection, id: number, note: INoteAttibutes) {
        return Service.update(db, id, note);
    }

    remove(db: IDbConnection, id: number) {
        return Service.remove(db, id);
    }
}
export default new Business();