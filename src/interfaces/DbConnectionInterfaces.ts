import { Sequelize } from "sequelize";

import { IModelsInterface } from "./ModelsInterface";

export interface IDbConnection extends IModelsInterface {
    sequelize: Sequelize
}