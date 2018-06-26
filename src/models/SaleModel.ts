import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ISaleAttibutes {
    id?: number;
    emission?: Date;
    tipe?: number;
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
        tipe: {
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
            type: DataTypes.INTEGER
        },
        companyId: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        },
        note: {
            type: DataTypes.STRING,
            validate: {
                max: 512
            }
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