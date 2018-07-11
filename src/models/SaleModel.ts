import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ISaleAttibutes {
    id?: number;
    emission?: Date;
    type?: number;
    total?: number;
    valueDicount?: number;
    percentageDiscount?: number;
    note?: string;
    personId?: number;
    companyId?: number;
    userId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ISaleInstance extends ISaleAttibutes, Sequelize.Instance<ISaleAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ISaleModel extends IBaseModelInterface, Sequelize.Model<ISaleInstance, ISaleAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ISaleModel => {
    const Sale: ISaleModel = sequelize.define('Sale', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        emission: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        type: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.FLOAT
        },
        valueDicount: {
            type: DataTypes.FLOAT
        },
        percentageDiscount: {
            type: DataTypes.FLOAT
        },
        personId: {
            type: DataTypes.INTEGER,
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
        note: {
            type: DataTypes.STRING
        }
    }, {
            tableName: 'sales'
        }

    );

    Sale.associate = (db: IDbConnection) => {
        db.Sale.belongsTo(db.Company, { foreignKey: 'companyId' });
        db.Sale.belongsTo(db.Person, { foreignKey: 'personId' });
        db.Sale.belongsTo(db.User, { foreignKey: 'userId' });

        db.Sale.hasMany(db.Receive, { foreignKey: 'saleId' });

        db.Sale.belongsToMany(db.Product, { through: { model: db.SaleProduct }, foreignKey: 'saleId' });
    }

    return Sale;
}