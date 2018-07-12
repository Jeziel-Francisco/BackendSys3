import * as Sequelize from 'sequelize';

import { IBaseModelInterface } from '../interfaces/BaseModelInterface';
import { IDbConnection } from '../interfaces/DbConnectionInterfaces';

export interface IPersonAttributes {
    id?: number;
    name?: string;
    fantasy?: string;
    legal?: boolean;  // pessoa Juridica?
    registryFederal?: string;
    registryState?: string;
    registryMunicipal?: string;
    consumerFinal?: boolean;
    type?: number; //tipo 1 cliente, tipo 2 forncedor ....
    active?: boolean;
    companyId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IPersonInstance extends IPersonAttributes, Sequelize.Instance<IPersonAttributes> { }

export interface IPersonModel extends IBaseModelInterface, Sequelize.Model<IPersonInstance, IPersonAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IPersonModel => {
    const Person: IPersonModel = sequelize.define('Person', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        fantasy: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        legal: {
            type: DataTypes.BOOLEAN
        },
        registryFederal: {
            type: DataTypes.STRING
        },
        registryState: {
            type: DataTypes.STRING
        },
        registryMunicipal: {
            type: DataTypes.STRING
        },
        consumerFinal: {
            type: DataTypes.BOOLEAN
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        type: {
            type: DataTypes.INTEGER
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'people'
        });

    Person.associate = (db: IDbConnection) => {
        db.Person.belongsTo(db.Company, { foreignKey: 'companyId' });
        db.Person.hasMany(db.Email, { foreignKey: 'personId' });
        db.Person.hasMany(db.Phone, { foreignKey: 'personId' });
        db.Person.hasMany(db.Address, { foreignKey: 'personId' });
        db.Person.hasMany(db.Receive, { foreignKey: 'personId' });
        db.Person.hasMany(db.Sale, { foreignKey: 'personId' });
        db.Person.hasMany(db.Note, { foreignKey: 'personId' });
    }

    return Person;
}