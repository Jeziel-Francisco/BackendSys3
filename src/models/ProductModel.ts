import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IProductAttibutes {
    id?: number;
    description?: string;
    package?: number;
    code?: string;
    priceCost?: number;
    priceSaleMin?: number;
    priceSale?: number;
    stock?: number;
    active?: boolean;
    packageId?: number;
    ncmId?: number;
    companyId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IProductInstance extends IProductAttibutes, Sequelize.Instance<IProductAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IProductModel extends IBaseModelInterface, Sequelize.Model<IProductInstance, IProductAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IProductModel => {
    const Product: IProductModel = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        package: {
            type: DataTypes.FLOAT
        },
        code: {
            type: DataTypes.STRING
        },
        priceCost: {
            type: DataTypes.FLOAT
        },
        priceSaleMin: {
            type: DataTypes.FLOAT
        },
        priceSale: {
            type: DataTypes.FLOAT
        },
        stock: {
            type: DataTypes.FLOAT
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        packageId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ncmId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
            tableName: 'products'
        }

    );

    Product.associate = (db: IDbConnection) => {
        db.Product.belongsTo(db.Company, { foreignKey: 'companyId' });

        db.Product.belongsTo(db.Package, { foreignKey: 'packageId' });
        db.Product.belongsTo(db.Ncm, { foreignKey: 'ncmId' });

        db.Product.belongsToMany(db.Sale, { through: { model: db.SaleProduct }, foreignKey: 'productId' });

    }

    return Product;
}