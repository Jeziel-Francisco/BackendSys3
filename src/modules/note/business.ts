import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { INoteAttibutes } from "../../models/NoteModel";
import Service from './service';

class Business {
    constructor() { }

    findByPerson(db: IDbConnection, companyId: any, userId: number, company: [number], personId: number) {
        if (company.indexOf(parseInt(companyId)) < 0) throw new Error(`Company ${companyId} does not belong to the user !`);

        return Service.findByPerson(db, userId, companyId, personId);
    }

    findAll(db: IDbConnection, companyId: any, userId: number, company: [number]) {
        if (company.indexOf(parseInt(companyId)) < 0) throw new Error(`Company ${companyId} does not belong to the user !`);

        return Service.findAll(db, userId, companyId);
    }

    create(db: IDbConnection, note: INoteAttibutes, userId: number, company: [number]) {
        if ((company.indexOf(note.companyId) < 0) || (note.userId != userId)) throw new Error(`Company ${note.companyId} or User ${note.userId} does not belong to the user !`);

        return Service.create(db, note);
    }

    update(db: IDbConnection, id: number, note: INoteAttibutes, userId: number, company: [number]) {
        if ((company.indexOf(note.companyId) < 0) || (note.userId != userId)) throw new Error(`Company ${note.companyId} or User ${note.userId} does not belong to the user !`);

        return Service.update(db, id, note, userId, note.companyId);
    }
}
export default new Business();