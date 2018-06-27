import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ITypeDocumentAttibutes {
    id?: number;
    situation?: number;
    type?: number;
    portion?: boolean;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ITypeDocumentInstance extends ITypeDocumentAttibutes, Sequelize.Instance<ITypeDocumentAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ITypeDocumentModel extends IBaseModelInterface, Sequelize.Model<ITypeDocumentInstance, ITypeDocumentAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ITypeDocumentModel => {
    const TypeDocument: ITypeDocumentModel = sequelize.define('TypeDocument', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        situation: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.INTEGER
        },
        portion: {
            type: DataTypes.BOOLEAN
        },
        description: {
            type: DataTypes.STRING
        },
    }, {
            tableName: 'typeDocuments'
        }

    );

    TypeDocument.associate = (db: IDbConnection) => {
        db.TypeDocument.hasMany(db.PaymentReceive, { foreignKey: 'typeDocumentId' });
    }

    return TypeDocument;
}