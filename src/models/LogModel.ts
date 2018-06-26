import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ILogAttibutes {
    id?: number;
    operation?: number;
    userId?: number;
    beforeData?: string;
    afterData?: string;
    date?: Date;
    createdAt?: string;
    updatedAt?: string;
}

export interface ILogInstance extends ILogAttibutes, Sequelize.Instance<ILogAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ILogModel extends IBaseModelInterface, Sequelize.Model<ILogInstance, ILogAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ILogModel => {
    const Log: ILogModel = sequelize.define('Log', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        operation: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        },
        beforeData: {
            type: DataTypes.STRING,
            validate:{
                max:1000
            }
        },
        query: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
    }, {
            tableName: 'logs'
        }

    );

    Log.associate = (db: IDbConnection) => {
        db.Log.belongsTo(db.User, { foreignKey: 'userId' });
    }

    return Log;
}