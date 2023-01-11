import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config';
import express from 'express';
import { UsersController } from './controllers/users.controller';

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    
    configureRoutes() {
        const usersController = new UsersController();
        this.app.get(`/users`, [
            //usersController.listUsers
            usersController.listUsers.bind(usersController)
        ]);

        this.app.post(`/users`, [
            usersController.createUser.bind(usersController)
        ]);

        this.app.put(`/users/:userId`, [
            usersController.put.bind(usersController)
        ]);

        this.app.patch(`/users/:userId`, [
            // example
            (req: any, res: any) => usersController.patch(req, res)
        ]);

        this.app.delete(`/users/:userId`, [
            // example            
            (req: any, res: any) => usersController.removeUser(req, res)
        ]);
        
        this.app.get(`/users/:userId`, [
            // example            
            (req: any, res: any) => usersController.getUserById(req, res)
        ]);
    }
    
}