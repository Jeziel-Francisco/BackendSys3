import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IAddressAttibutes {
    id?: number;
    cep?: string;
    place?: string;
    neighborhood?: string;
    number?: string;
    complement?: string;
    note?: string;
    personId?: number;
    cityId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IAddressInstance extends IAddressAttibutes, Sequelize.Instance<IAddressAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IAddressModel extends IBaseModelInterface, Sequelize.Model<IAddressInstance, IAddressAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IAddressModel => {
    const Address: IAddressModel = sequelize.define('Address', {
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
        clientId: {
            type: DataTypes.INTEGER
        },
        cityId: {
            type: DataTypes.INTEGER
        },
        personId: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: 'address'
        }

    );

    Address.associate = (db: IDbConnection) => {
        /*        db.Address.hasMany(db.Company, { foreignKey: 'addressId' }); */
        db.Address.belongsTo(db.Person, { foreignKey: 'personId' });
        db.Address.belongsTo(db.City, { foreignKey: 'cityId' });


    }

    return Address;
}