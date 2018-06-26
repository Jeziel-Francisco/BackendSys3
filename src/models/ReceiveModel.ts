import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IReceiveAttibutes {
    id?: number;
    emission?: Date;
    maturity?: Date;
    payment?: Date;
    peding?: boolean;
    total?: number;
    excluded?: boolean;
    userId?: number;
    personId?: number;
    saleId?: number;
    companyId?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface IReceiveInstance extends IReceiveAttibutes, Sequelize.Instance<IReceiveAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IReceiveModel extends IBaseModelInterface, Sequelize.Model<IReceiveInstance, IReceiveAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IReceiveModel => {
    const Receive: IReceiveModel = sequelize.define('Receive', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        emission: {
            type: DataTypes.DATE
        },
        maturity: {
            type: DataTypes.DATE
        },
        payment: {
            type: DataTypes.DATE
        },
        peding: {
            type: DataTypes.BOOLEAN
        },
        total: {
            type: DataTypes.FLOAT
        },
        excluded: {
            type: DataTypes.BOOLEAN
        },
        userId: {
            type: DataTypes.INTEGER
        },
        personId: {
            type: DataTypes.INTEGER
        },
        companyId: {
            type: DataTypes.INTEGER
        },
        saleId: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: 'receipts'
        }

    );

    Receive.associate = (db: IDbConnection) => {
        db.Receive.belongsTo(db.Company, { foreignKey: 'companyId' });
        db.Receive.belongsTo(db.Sale, { foreignKey: 'saleId' });
        db.Receive.belongsTo(db.Person, { foreignKey: 'personId' });
        db.Receive.belongsTo(db.User, { foreignKey: 'userId' });
        
        db.Receive.hasMany(db.PaymentReceive, { foreignKey: 'receiveId' });
    }


    return Receive;
}