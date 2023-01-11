"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = require("./controllers/users.controller");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const usersController = new users_controller_1.UsersController();
        this.app.get(`/users`, [
            (req, res) => usersController.listUsers(req, res)
        ]);
        this.app.post(`/users`, [
            usersController.createUser.bind(usersController)
        ]);
        this.app.put(`/users/:userId`, [
            (req, res, next) => usersController.put(req, res, next)
        ]);
        this.app.patch(`/users/:userId`, [
            //usersController.patch
            (req, res) => usersController.patch(req, res)
        ]);
        this.app.delete(`/users/:userId`, [
            //usersController.removeUser
            (req, res) => usersController.removeUser(req, res)
        ]);
        this.app.get(`/users/:userId`, [
            //usersController.getUserById
            (req, res) => usersController.getUserById(req, res)
        ]);
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFtRjtBQUVuRixxRUFBaUU7QUFFakUsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLGVBQWUsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDOUQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNuRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1NBQ3pFLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLHVCQUF1QjtZQUN2QixDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUMxRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5Qiw0QkFBNEI7WUFDNUIsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDL0QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsNkJBQTZCO1lBQzdCLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ2hFLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSjtBQXBDRCxrQ0FvQ0MifQ==