import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IAddressCompanyAttibutes {
    id?: number;
    cep?: string;
    place?: string;
    neighborhood?: string;
    number?: string;
    complement?: string;
    note?: string;
    active?: boolean;
    personId?: number;
    cityId?: number;
    createdAt?: string;
    updatedAt?: string;
    companyId?: number;
}

export interface IAddressCompanyInstance extends IAddressCompanyAttibutes, Sequelize.Instance<IAddressCompanyAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IAddressCompanyModel extends IBaseModelInterface, Sequelize.Model<IAddressCompanyInstance, IAddressCompanyAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IAddressCompanyModel => {
    const AddressCompany: IAddressCompanyModel = sequelize.define('AddressCompany', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cep: {
            type: DataTypes.STRING
        },
        place: {
            type: DataTypes.STRING
        },
        neighborhood: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.STRING
        },
        complement: {
            type: DataTypes.STRING
        },
        note: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        cityId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'address_companies'
        }

    );

    AddressCompany.associate = (db: IDbConnection) => {
        db.AddressCompany.belongsTo(db.Company, { foreignKey: 'companyId' });
        db.AddressCompany.belongsTo(db.City, { foreignKey: 'cityId' });


    }

    return AddressCompany;
}