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
    active?: boolean;
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
            type: DataTypes.STRING
        },
        fantasy: {
            type: DataTypes.STRING
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
        passwordMunicipal: {
            type: DataTypes.STRING
        },
        passwordCertificate: {
            type: DataTypes.STRING
        },
        nameResponsible: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        typeCertificate: {
            type: DataTypes.STRING
        },
        typeEmissionNote: {
            type: DataTypes.STRING
        }
    }, {
            tableName: 'companies'
        });

    Company.associate = (db: IDbConnection) => {
        db.Company.belongsToMany(db.User, { through: { model: db.CompanyUser }, foreignKey: 'companyId' });

        db.Company.hasMany(db.Product, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Person, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Sale, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Receive, { foreignKey: 'companyId' });
        db.Company.hasMany(db.EmailCompany, { foreignKey: 'companyId' });
        db.Company.hasMany(db.PhoneCompany, { foreignKey: 'companyId' });
        db.Company.hasMany(db.Note, { foreignKey: 'companyId' });
        db.Company.hasMany(db.AddressCompany, { foreignKey: 'companyId' });
    }

    return Company;
}