import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IStateAttibutes {
    id?: number;
    code?: number;
    name?: string;
    initials?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IStateInstance extends IStateAttibutes, Sequelize.Instance<IStateAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IStateModel extends IBaseModelInterface, Sequelize.Model<IStateInstance, IStateAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IStateModel => {
    const State: IStateModel = sequelize.define('State', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        code: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        initials: {
            type: DataTypes.STRING
        }
    }, {
            tableName: 'states'
        }
    );

    State.associate = (db: IDbConnection) => {
        db.State.hasMany(db.City, { foreignKey: 'stateId' });
    }

    return State;
}