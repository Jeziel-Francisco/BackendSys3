import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface INcmAttibutes {
    id?: number;
    note?: string;
    percentageTributes?: number;
    percentageTributesImp?: number;
    natureRecipePisCofins?: number;
    percentageTributesFederal?: number;
    percentageTributesState?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface INcmInstance extends INcmAttibutes, Sequelize.Instance<INcmAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface INcmModel extends IBaseModelInterface, Sequelize.Model<INcmInstance, INcmAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): INcmModel => {
    const Ncm: INcmModel = sequelize.define('Ncm', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        note: {
            type: DataTypes.STRING
        },
        percentageTributes: {
            type: DataTypes.FLOAT
        },
        percentageTributesImp: {
            type: DataTypes.FLOAT
        },
        natureRecipePisCofins: {
            type: DataTypes.FLOAT
        },
        percentageTributesFederal: {
            type: DataTypes.FLOAT
        },
        percentageTributesState: {
            type: DataTypes.FLOAT
        }
    }, {
            tableName: 'ncms'
        }

    );

    Ncm.associate = (db: IDbConnection) => {
        db.Ncm.hasMany(db.Product, { foreignKey: 'ncmId' });
    }

    return Ncm;
}