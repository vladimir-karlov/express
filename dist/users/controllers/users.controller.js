"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const user_services_1 = require("../services/user.services");
/**
 * A controller for handling user-related routes.
 */
class UsersController {
    /**
     * Creates a new instance of the UsersController.
     */
    constructor() {
        this.usersService = user_services_1.UsersService.getInstance();
    }
    /**
     * Handles a request to list users.
     *
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    listUsers(req, res) {
        const users = this.usersService.list(100, 0);
        res.status(200).send(users);
    }
    /**
     * Handles a request to get a user by ID.
     *
     * @param {express.Request} req - The request object.
     * @param {express.Response} res - The response object.
     */
    getUserById(req, res) {
        const user = this.usersService.readById(userId);
        res.status(200).send(user);
    }
    /**
     * Handles a request to create a new user.
     *
     * @param {express.Request} req - The request object.
     * @param {express.Response} res
     */
    createUser(req, res) {
        const userId = this.usersService.create(req.body);
        res.status(201).send({ id: userId });
    }
    patch(req, res) {
        this.usersService.patchById(req.body);
        res.status(204).send(``);
    }
    put(req, res, next) {
        this.usersService.updateById(req.body);
        res.status(204).send(``);
    }
    removeUser(req, res) {
        // const usersService = UsersService.getInstance();      
        this.usersService.deleteById(req.params.userId);
        res.status(204).send(``);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZEQUF5RDtBQUV6RDs7R0FFRztBQUNILE1BQWEsZUFBZTtJQUd4Qjs7T0FFRztJQUNIO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ25ELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNyRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDbEQseURBQXlEO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBMURELDBDQTBEQyJ9