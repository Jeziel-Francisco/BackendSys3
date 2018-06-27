import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IPackageAttibutes {
    id?: number;
    description?: string;
    initials?: string;
    factor?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IPackageInstance extends IPackageAttibutes, Sequelize.Instance<IPackageAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IPackageModel extends IBaseModelInterface, Sequelize.Model<IPackageInstance, IPackageAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IPackageModel => {
    const Package: IPackageModel = sequelize.define('Package', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        initials: {
            type: DataTypes.STRING
        },
        factor: {
            type: DataTypes.FLOAT
        },
    }, {
            tableName: 'packaging'
        }

    );

    Package.associate = (db: IDbConnection) => {
        db.Package.hasMany(db.Product, { foreignKey: 'packageId' });
    }


    return Package;
}