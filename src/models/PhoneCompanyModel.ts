import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IPhoneCompanyAttibutes {
    id?: number;
    companyId?: number;
    phone?: string;
    contact?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IPhoneCompanyInstance extends IPhoneCompanyAttibutes, Sequelize.Instance<IPhoneCompanyAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IPhoneCompanyModel extends IBaseModelInterface, Sequelize.Model<IPhoneCompanyInstance, IPhoneCompanyAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IPhoneCompanyModel => {
    const PhoneCompany: IPhoneCompanyModel = sequelize.define('PhoneCompany', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 3
            }
        },
        companyId: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: 'phoneCompanies'
        }

    );

    PhoneCompany.associate = (db: IDbConnection) => {
        db.PhoneCompany.belongsTo(db.Company, { foreignKey: 'companyId' });
    }

    return PhoneCompany;
}