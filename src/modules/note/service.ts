import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { INoteAttibutes } from "../../models/NoteModel";

class Service {
    constructor() { }

    findByPerson(db: IDbConnection, userId: number, companyId: number, personId: number) {
        return db.Note.findAll({
            where: {
                userId: userId,
                companyId: companyId,
                personId: personId
            },
            order: [
                ['dateRegistration', 'DESC']
            ]
        });
    }

    findAll(db: IDbConnection, userId: number, companyId: number) {
        return db.Note.findAll({
            where: {
                userId: userId,
                companyId: companyId
            },
            include: [
                {
                    model: db.Person
                }
            ],
            order: [
                ['dateRegistration', 'DESC']
            ]
        });
    }

    create(db: IDbConnection, note: INoteAttibutes) {
        return db.Note.create(note);
    }

    async update(db: IDbConnection, id: number, note: INoteAttibutes, userId: number, companyId: number) {
        let data = await db.Note.findOne({
            where: {
                id: id,
                userId: userId,
                companyId: companyId
            }
        });
        if (!data) throw new Error(`Id ${id} or userId ${userId} or companyId ${companyId} not found`);
        return await data.update(note);
    }
}

export default new Service();