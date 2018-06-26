import * as Sequelize from 'sequelize';

import { IBaseModelInterface } from '../interfaces/BaseModelInterface';
import { IDbConnection } from '../interfaces/DbConnectionInterfaces';

export interface ICompanyAttributes {
    id?: number;
    name?: string;
    fantasy?: string;
    registryFederal?: string;
    registryState?: string;
    registryMunicipal?: string;
    passwordMunicipal?: string;
    passwordCertificate?: string;
    nameResponsible?: string;
    typeCertificate?: string;
    typeEmissionNote?: string;
    addressId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ICompanyInstance extends ICompanyAttributes, Sequelize.Instance<ICompanyAttributes> { }

export interface ICompanyModel extends IBaseModelInterface, Sequelize.Model<ICompanyInstance, ICompanyAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ICompanyModel => {
    const Company: ICompanyModel = sequelize.define('Company', {
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
                notEmpty: true,
                max: 128
            }
        },
        fantasy: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        registryFederal: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        registryState: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        registryMunicipal: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        passwordMunicipal: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        passwordCertificate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        nameResponsible: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        typeCertificate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        typeEmissionNote: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 128
            }
        },
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
            tableName: 'companies'
        });

    Company.associate = (db: IDbConnection) => {
        db.Company.hasMany(db.Product, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Person, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Sale, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Receive, { foreignKey: 'companyId' });
        db.Company.hasMany(db.User, { foreignKey: 'companyId' });
        db.Company.hasMany(db.EmailCompany, { foreignKey: 'companyId' });
        db.Company.hasMany(db.PhoneCompany, { foreignKey: 'companyId' });
    }

    return Company;
}