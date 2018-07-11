import { Application, Request, Response } from 'express';
import { Verify } from "../modules/auth/auth";

import Context from "../middleware/context.middleware";

import AddressCtrl from './../modules/address/controller';
import companyCtrl from './../modules/company/controller';
import NoteCtrl from './../modules/note/controller';
import PersonCtrl from './../modules/person/controller';
import SaleCtrl from './../modules/sale/controller';
import UserCtrl from './../modules/user/controller';

export const AddressRoutes = (express: Application) => {
    express.route('/api/v1/address').all(Verify).post(Context.setContext, AddressCtrl.create);
    express.route('/api/v1/address/createbulk').all(Verify).post(Context.setContext, AddressCtrl.createBulk);

    express.route('/api/v1/address/:id').all(Verify).put(Context.setContext, AddressCtrl.update);

    express.route('/api/v1/address/:id').all(Verify).delete(Context.setContext, AddressCtrl.remove);
}

export const CompanyRoutes = (express: Application) => {
    express.route('/api/v1/company').all(Verify).post(Context.setContext, companyCtrl.create);
}

export const NoteRoutes = (express: Application) => {
    express.route('/api/v1/note/:id').all(Verify).get(Context.setContext, NoteCtrl.findById);
    express.route('/api/v1/note/findbyperson/:id').all(Verify).get(Context.setContext, NoteCtrl.findByPerson);
    express.route('/api/v1/note').all(Verify).get(Context.setContext, NoteCtrl.findAll);

    express.route('/api/v1/note').all(Verify).post(Context.setContext, NoteCtrl.create);

    express.route('/api/v1/note/:id').all(Verify).put(Context.setContext, NoteCtrl.update);

    express.route('/api/v1/note/:id').all(Verify).delete(Context.setContext, NoteCtrl.remove);
}

export const PersonRoutes = (express: Application) => {
    express.route('/api/v1/person/findbyid/:id').all(Verify).get(Context.setContext, PersonCtrl.findById);
    express.route('/api/v1/person').all(Verify).get(Context.setContext, PersonCtrl.findAll);

    express.route('/api/v1/person').all(Verify).post(Context.setContext, PersonCtrl.create);
    express.route('/api/v1/person/bulk').all(Verify).post(Context.setContext, PersonCtrl.createBulk);


    express.route('/api/v1/person/:id').all(Verify).put(Context.setContext, PersonCtrl.update);
}

export const UserRoutes = (express: Application) => {
    express.route('/api/v1/user/findbyid').all(Verify).get(Context.setContext, UserCtrl.findById);
    express.route('/api/v1/user/username/:username').get(Context.setContext, UserCtrl.findByUsername);

    express.route('/api/v1/user/findbyemail').post(Context.setContext, UserCtrl.findByEmail);
    express.route('/api/v1/user').post(Context.setContext, UserCtrl.create);
    express.route('/api/v1/user/auth').post(Context.setContext, UserCtrl.auth);

    express.route('/api/v1/user').all(Verify).put(Context.setContext, UserCtrl.update);
    express.route('/api/v1/user/update/password').all(Verify).put(Context.setContext, UserCtrl.updatePassword);

    express.route('/api/v1/user').all(Verify).delete(Context.setContext, UserCtrl.remove);
}

export const SaleRoutes = (express: Application) => {
    express.route('/api/v1/sale/findbycompany').all(Verify).get(Context.setContext, SaleCtrl.findByCompanyId);

    express.route('/api/v1/sale').all(Verify).post(Context.setContext, SaleCtrl.createSale);
    express.route('/api/v1/sale/product').all(Verify).post(Context.setContext,SaleCtrl.createSaleProduct);
    express.route('/api/v1/sale/product/list').all(Verify).post(Context.setContext,SaleCtrl.createBulkSaleProduct);

    express.route('/api/v1/sale/:id').all(Verify).put(Context.setContext, SaleCtrl.updateSale);
}
