"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = require("./controllers/users.controller");
const users_middleware_1 = require("./middleware/users.middleware");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new users_controller_1.UsersController();
        const usersMiddleware = users_middleware_1.UsersMiddleware.getInstance();
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
            (req, res) => usersController.patch(req, res)
        ]);
        this.app.delete(`/users/:userId`, [
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            (req, res) => usersController.removeUser(req, res)
        ]);
        this.app.get(`/users/:userId`, [
            usersMiddleware.extractUserId,
            usersMiddleware.validateUserExists,
            (req, res) => usersController.getUserById(req, res)
        ]);
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFtRjtBQUVuRixxRUFBaUU7QUFDakUsb0VBQThEO0FBRTlELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ1gsTUFBTSxlQUFlLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDOUMsTUFBTSxlQUFlLEdBQUcsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsMkJBQTJCO1lBQzNCLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNsRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEIsZUFBZSxDQUFDLG9DQUFvQztZQUNwRCxlQUFlLENBQUMsNEJBQTRCO1lBQzVDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNuRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixlQUFlLENBQUMsa0JBQWtCO1lBQ2xDLGVBQWUsQ0FBQyxhQUFhO1lBQzdCLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM1QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QixlQUFlLENBQUMsa0JBQWtCO1lBQ2xDLGVBQWUsQ0FBQyxhQUFhO1lBQzdCLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQzFELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO1lBQzlCLGVBQWUsQ0FBQyxrQkFBa0I7WUFDbEMsZUFBZSxDQUFDLGFBQWE7WUFDN0IsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDL0QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsZUFBZSxDQUFDLGFBQWE7WUFDN0IsZUFBZSxDQUFDLGtCQUFrQjtZQUNsQyxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNoRSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUo7QUE5Q0Qsa0NBOENDIn0=