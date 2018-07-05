import * as Sequelize from "sequelize";

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IPaymentReceiveAttibutes {
    id?: number;
    total?: number;
    percentageDiscount?: number;
    totalDiscount?: number;
    emission?: Date;
    receiveId?: number;
    typeDocumentId?: number;
    excluded?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IPaymentReceiveInstance extends IPaymentReceiveAttibutes, Sequelize.Instance<IPaymentReceiveAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IPaymentReceiveModel extends IBaseModelInterface, Sequelize.Model<IPaymentReceiveInstance, IPaymentReceiveAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IPaymentReceiveModel => {
    const PaymentReceive: IPaymentReceiveModel = sequelize.define('PaymentReceive', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT
        },
        percentageDiscount: {
            type: DataTypes.FLOAT
        },
        totalDiscount: {
            type: DataTypes.FLOAT
        },
        emission: {
            type: DataTypes.DATE
        },
        excluded: {
            type: DataTypes.BOOLEAN
        },
        receiveId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        typeDocumentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            tableName: 'paymentsReceive'
        }

    );

    PaymentReceive.associate = (db: IDbConnection) => {
        db.PaymentReceive.belongsTo(db.TypeDocument, { foreignKey: 'typeDocumentId' });
        db.PaymentReceive.belongsTo(db.Receive, { foreignKey: 'receiveId' });
    }

    return PaymentReceive;
}