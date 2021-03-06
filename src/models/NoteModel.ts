import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface INoteAttibutes {
    id?: number;
    personId?: number;
    userId?: number;
    companyId?: number;
    title?: string;
    body?: string;
    dateRegistration?: Date;
    createdAt?: string;
    updatedAt?: string;
}

export interface INoteInstance extends INoteAttibutes, Sequelize.Instance<INoteAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface INoteModel extends IBaseModelInterface, Sequelize.Model<INoteInstance, INoteAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): INoteModel => {
    const Note: INoteModel = sequelize.define('Note', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.STRING
        },
        dateRegistration: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        personId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'grades'
        }

    );

    Note.associate = (db: IDbConnection) => {
        db.Note.belongsTo(db.Person, { foreignKey: 'personId' });
        db.Note.belongsTo(db.User, { foreignKey: 'userId' });
        db.Note.belongsTo(db.Company, { foreignKey: 'companyId' });
    };

    return Note;
}