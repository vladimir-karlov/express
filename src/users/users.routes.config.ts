import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config';
import express from 'express';
import { UsersController } from './controllers/users.controller';
import {UsersMiddleware} from './middleware/users.middleware';

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    
    configureRoutes() {
        const usersController = new UsersController();
        const usersMiddleware = UsersMiddleware.getInstance();
        
        this.app.get(`/users`, [
            //usersController.listUsers
            usersController.listUsers.bind(usersController)
        ]);

        this.app.post(`/users`, [
            usersMiddleware.validateRequiredCreateUserBodyFields,
            usersMiddleware.validateSameEmailDoesntExist,
            usersController.createUser.bind(usersController)
        ]);

        this.app.put(`/users/:userId`, [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.put.bind(usersController)
        ]);

        this.app.patch(`/users/:userId`, [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            (req: any, res: any) => usersController.patch(req, res)
        ]);

        this.app.delete(`/users/:userId`, [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,          
            (req: any, res: any) => usersController.removeUser(req, res)
        ]);
        
        this.app.get(`/users/:userId`, [
            usersMiddleware.extractUserId,             
            usersMiddleware.validateUserExists,
            (req: any, res: any) => usersController.getUserById(req, res)
        ]);
    }
    
}