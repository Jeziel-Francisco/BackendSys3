import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IEmailAttibutes {
    id?: number;
    personId?: number;
    email?: string;
    contact?: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IEmailInstance extends IEmailAttibutes, Sequelize.Instance<IEmailAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IEmailModel extends IBaseModelInterface, Sequelize.Model<IEmailInstance, IEmailAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IEmailModel => {
    const Email: IEmailModel = sequelize.define('Email', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        personId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'emails'
        }

    );

    Email.associate = (db: IDbConnection) => {
        db.Email.belongsTo(db.Person, { foreignKey: 'personId' });
    }

    return Email;
}