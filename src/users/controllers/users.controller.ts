import express from 'express';
import { UsersService } from '../services/user.services';

/**
 * A controller for handling user-related routes.
 */
export class UsersController {
    private usersService: UsersService;
  /**
   * Creates a new instance of the UsersController.
   */
  constructor() {
    this.usersService = UsersService.getInstance();    
  }

  /**
   * Handles a request to list users.
   *
   * @param {express.Request} req - The request object.
   * @param {express.Response} res - The response object.
   */
  listUsers(req: express.Request, res: express.Response) {
    const users = this.usersService.list(100, 0);
    res.status(200).send(users);
  }

  /**
   * Handles a request to get a user by ID.
   *
   * @param {express.Request} req - The request object.
   * @param {express.Response} res - The response object.
   */
  getUserById(req: express.Request, res: express.Response) {
    //const usersService = UsersService.getInstance();
    const user = this.usersService.readById(req.params.userId);
    res.status(200).send(user);
  }

  /**
   * Handles a request to create a new user.
   *
   * @param {express.Request} req - The request object.
   * @param {express.Response} res
   */
    createUser(req: express.Request, res: express.Response) {
        const userId = this.usersService.create(req.body);
        res.status(201).send({id: userId});
    }

    patch(req: express.Request, res: express.Response) {
        this.usersService.patchById(req.body);
        res.status(204).send(``);
    }

    put(req: express.Request, res: express.Response, next: express.NextFunction) {
        this.usersService.updateById(req.body);
        res.status(204).send(``);
    }

    removeUser(req: express.Request, res: express.Response) {
        this.usersService.deleteById(req.params.userId);
        res.status(204).send(``);
    }
}