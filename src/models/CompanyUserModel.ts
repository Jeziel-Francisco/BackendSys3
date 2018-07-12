import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ICompanyUserAttibutes {
    id?: number;
    companyId?: number;
    userId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ICompanyUserInstance extends ICompanyUserAttibutes, Sequelize.Instance<ICompanyUserAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ICompanyUserModel extends IBaseModelInterface, Sequelize.Model<ICompanyUserInstance, ICompanyUserAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ICompanyUserModel => {
    const CompanyUser: ICompanyUserModel = sequelize.define('CompanyProduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
            tableName: 'companyUser'
        }

    );

    return CompanyUser;
}