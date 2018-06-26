import { IDbConnection } from "../../interfaces/DbConnectionInterfaces";

import { ILogAttibutes } from "../../models/LogModel";

class Service {
    constructor() { }

    create(db: IDbConnection, log: ILogAttibutes) {
        return db.Log.create(log);
    }
}

export default new Service();