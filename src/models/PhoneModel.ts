import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IPhoneAttibutes {
    id?: number;
    personId?: number;
    phone?: string;
    contact?: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IPhoneInstance extends IPhoneAttibutes, Sequelize.Instance<IPhoneAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IPhoneModel extends IBaseModelInterface, Sequelize.Model<IPhoneInstance, IPhoneAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IPhoneModel => {
    const Phone: IPhoneModel = sequelize.define('Phone', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        personId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'phones'
        }

    );

    Phone.associate = (db: IDbConnection) => {
        db.Phone.belongsTo(db.Person, { foreignKey: 'personId' });
    }

    return Phone;
}