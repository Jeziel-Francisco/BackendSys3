import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IEmailCompanyAttibutes {
    id?: number;
    companyId?: number;
    email?: string;
    contact?: string;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IEmailCompanyInstance extends IEmailCompanyAttibutes, Sequelize.Instance<IEmailCompanyAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IEmailCompanyModel extends IBaseModelInterface, Sequelize.Model<IEmailCompanyInstance, IEmailCompanyAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IEmailCompanyModel => {
    const EmailCompany: IEmailCompanyModel = sequelize.define('EmailCompany', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        contact: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'emails_companies'
        }

    );

    EmailCompany.associate = (db: IDbConnection) => {
        db.EmailCompany.belongsTo(db.Company, { foreignKey: 'companyId' });
    }

    return EmailCompany;
}