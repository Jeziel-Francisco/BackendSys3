import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface ICityAttibutes {
    id?: number;
    name?: string;
    stateId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ICityInstance extends ICityAttibutes, Sequelize.Instance<ICityAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface ICityModel extends IBaseModelInterface, Sequelize.Model<ICityInstance, ICityAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ICityModel => {
    const City: ICityModel = sequelize.define('City', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 3,
                max: 128
            }
        },
        stateId: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: 'cities'
        }
    );

    City.associate = (db: IDbConnection) => {
        db.City.hasMany(db.Address, { foreignKey: 'cityId' });
        db.City.belongsTo(db.State, { foreignKey: 'stateId' });
    }

    return City;
}