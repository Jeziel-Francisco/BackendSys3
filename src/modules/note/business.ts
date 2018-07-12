import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { INoteAttibutes } from "../../models/NoteModel";
import Service from './service';

class Business {
    constructor() { }

    findById(db: IDbConnection, id: number, userId: number, company: [{ companyId: number }], companyId: number) {
        if (company.indexOf({ companyId: companyId }) < 0) {
            companyId = company[0].companyId;
        }
        return Service.findById(db, id, userId, companyId);
    }

    findByPerson(db: IDbConnection, userId: number, company: [{ companyId: number }], companyId: number, personId: number) {
        if (company.indexOf({ companyId: companyId }) < 0) {
            companyId = company[0].companyId;
        }
        return Service.findByPerson(db, userId, companyId, personId);
    }

    findAll(db: IDbConnection, userId: number, company: [{ companyId: number }], companyId: number) {
        if (company.indexOf({ companyId: companyId }) < 0) {
            companyId = company[0].companyId;
        }
        return Service.findAll(db, userId, companyId);
    }

    create(db: IDbConnection, note: INoteAttibutes, company: [{ companyId: number }]) {
        if (company.indexOf({ companyId: note.companyId }) < 0) {
            note.companyId = company[0].companyId;
        }
        return Service.create(db, note);
    }

    update(db: IDbConnection, id: number, note: INoteAttibutes, userId: number, company: [{ companyId: number }], companyId: number) {
        if (company.indexOf({ companyId: companyId }) < 0) {
            companyId = company[0].companyId;
        }
        return Service.update(db, id, note, userId, companyId);
    }

    remove(db: IDbConnection, id: number, userId: number, company: [{ companyId: number }], companyId: number) {
        if (company.indexOf({ companyId: companyId }) < 0) {
            companyId = company[0].companyId;
        }
        return Service.remove(db, id, userId, companyId);
    }
}
export default new Business();