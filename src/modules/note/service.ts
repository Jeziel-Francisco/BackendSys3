import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";
import { INoteAttibutes } from "../../models/NoteModel";

class Service {
    constructor() { }

    findById(db: IDbConnection, id: number, userId: number, companyId: number) {
        return db.Note.findOne({
            where: {
                id: id,
                userId: userId,
                companyId: companyId
            },
            attributes: ['id', 'title', 'body', 'dateRegistration'],
        });
    }

    findByPerson(db: IDbConnection, userId: number, companyId: number, personId: number) {
        return db.Note.findAll({
            where: {
                userId: userId,
                companyId: companyId,
                personId: personId
            },
            attributes: ['id', 'title', 'body', 'dateRegistration'],
        });
    }

    findAll(db: IDbConnection, userId: number, companyId: number) {
        return db.Note.findAll({
            where: {
                userId: userId,
                companyId: companyId
            },
            attributes: ['id', 'title', 'body', 'dateRegistration'],
            include: [
                {
                    model: db.Person,
                    attributes: ['name', 'fantasy', 'id']
                }
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
            },
            attributes: ['id', 'title', 'body', 'dateRegistration']
        });
        if (!data) throw new Error('Id not found');
        return await data.update(note);
    }

    async remove(db: IDbConnection, id: number, userId: number, companyId: number) {
        let data = await db.Note.findOne({
            where: {
                id: id,
                userId: userId,
                companyId: companyId
            },
            attributes: ['id', 'title', 'body', 'dateRegistration']
        });
        if (!data) throw new Error('Id not found');
        return await data.destroy();
    }
}

export default new Service();