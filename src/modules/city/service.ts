import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

class Service {
   
    constructor() { }

    findAll(db: IDbConnection) {
        return db.City.findAll();
    }
}

export default new Service();