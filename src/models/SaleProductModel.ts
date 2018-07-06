import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ISaleProductAttibutes {
    id?: number;
    saleId?: number;
    productId?: number;
    amount?: number;
    priceUnity?: number;
    priceTotal?: number;
    valueDiscount?: number;
    percentageDiscount?: number;
    note?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ISaleProductInstance extends ISaleProductAttibutes, Sequelize.Instance<ISaleProductAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ISaleProductModel extends IBaseModelInterface, Sequelize.Model<ISaleProductInstance, ISaleProductAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ISaleProductModel => {
    const SaleProduct: ISaleProductModel = sequelize.define('SaleProduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT
        },
        priceUnity: {
            type: DataTypes.FLOAT
        },
        priceTotal: {
            type: DataTypes.FLOAT
        },
        valueDiscount: {
            type: DataTypes.FLOAT
        },
        percentageDiscount: {
            type: DataTypes.FLOAT
        },
        note: {
            type: DataTypes.STRING
        },
        saleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
            tableName: 'saleProducts'
        }

    );

    return SaleProduct;
}