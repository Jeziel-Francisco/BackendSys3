import { Application, Request, Response } from 'express';
import { Verify } from "../modules/auth/auth";

import Context from "../middleware/context.middleware";

import UserCtrl from './../modules/user/controller';
import PersonCtrl from './../modules/person/controller';

export const UserRoutes = (express: Application) => {
    express.route('/api/v1/user/findbyid').all(Verify).get(Context.setContext, UserCtrl.findById);

    express.route('/api/v1/user/findbyemail').all(Verify).post(Context.setContext, UserCtrl.findByEmail);
    express.route('/api/v1/user').post(Context.setContext, UserCtrl.create);
    express.route('/api/v1/user/auth').post(Context.setContext, UserCtrl.auth);

    express.route('/api/v1/user').all(Verify).put(Context.setContext, UserCtrl.update);
    express.route('/api/v1/user/update/password').all(Verify).put(Context.setContext, UserCtrl.updatePassword);

    express.route('/api/v1/user').all(Verify).delete(Context.setContext, UserCtrl.remove);
}
export const CompanyRoutes = (express: Application) => {
}

export const PersonRoutes = (express: Application) => {
    express.route('/api/v1/findbyid/:id').all(Verify).get(Context.setContext, PersonCtrl.findById);
    express.route('/api/v1/person').all(Verify).get(Context.setContext, PersonCtrl.findAll);

    express.route('/api/v1/person').all(Verify).post(Context.setContext, PersonCtrl.create);

    express.route('/api/v1/person/:id').all(Verify).put(Context.setContext, PersonCtrl.update);
}
