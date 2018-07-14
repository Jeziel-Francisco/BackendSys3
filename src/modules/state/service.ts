import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

class Service {
   
    constructor() { }

    findAll(db: IDbConnection) {
        return db.State.findAll();
    }
}

export default new Service();