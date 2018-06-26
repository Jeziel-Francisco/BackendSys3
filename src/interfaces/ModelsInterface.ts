import { IAddressModel } from "../models/AddressModel";
import { ICityModel } from "../models/CityModel";
import { ICompanyModel } from "../models/CompanyModel";
import { IEmailModel } from "../models/EmailModel";
import { IEmailCompanyModel } from "../models/EmailCompanyModel";
import { ILogModel } from "../models/LogModel";
import { INcmModel } from "../models/NcmModel";
import { IPackageModel } from "../models/PackageModel";
import { IPaymentReceiveModel } from "../models/PaymentReceiveModel";
import { IPhoneModel } from "../models/PhoneModel";
import { IPersonModel } from "../models/PersonModel";
import { IPhoneCompanyModel } from "../models/PhoneCompanyModel";
import { IProductModel } from "../models/ProductModel";
import { IReceiveModel } from "../models/ReceiveModel";
import { ISaleModel } from "../models/SaleModel";
import { ISaleProductModel } from "../models/SaleProductModel";
import { IStateModel } from "../models/StateModel";
import { ITypeDocumentModel } from "../models/TypeDocumentModel";
import { IUserModel } from "../models/UserModel";

export interface IModelsInterface {
  Address: IAddressModel;
  City: ICityModel;
  Company: ICompanyModel;
  Email: IEmailModel;
  EmailCompany: IEmailCompanyModel;
  Log: ILogModel,
  Ncm: INcmModel;
  Package: IPackageModel;
  PaymentReceive: IPaymentReceiveModel,
  Person: IPersonModel;
  Phone: IPhoneModel;
  PhoneCompany: IPhoneCompanyModel;
  Product: IProductModel;
  Receive: IReceiveModel,
  Sale: ISaleModel
  SaleProduct: ISaleProductModel,
  State: IStateModel;
  TypeDocument: ITypeDocumentModel,
  User: IUserModel;
}