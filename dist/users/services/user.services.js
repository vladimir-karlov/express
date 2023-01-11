"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const in_memory_dao_1 = require("../../daos/in.memory.dao");
class UsersService {
    constructor() {
        this.dao = in_memory_dao_1.GenericInMemoryDao.getInstance();
    }
    static getInstance() {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }
    create(resource) {
        return this.dao.addUser(resource);
    }
    deleteById(resourceId) {
        return this.dao.removeUserById(resourceId);
    }
    ;
    list(limit, page) {
        return this.dao.getUsers();
    }
    ;
    patchById(resource) {
        return this.dao.patchUserById(resource);
    }
    ;
    readById(resourceId) {
        return this.dao.getUserById(resourceId);
    }
    ;
    updateById(resource) {
        return this.dao.putUserById(resource);
    }
    ;
}
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9zZXJ2aWNlcy91c2VyLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDREQUE4RDtBQUM5RCxNQUFhLFlBQVk7SUFJckI7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLGtDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVztRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUFBLENBQUM7SUFFRixTQUFTLENBQUMsUUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFBQSxDQUFDO0lBRUYsUUFBUSxDQUFDLFVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQUEsQ0FBQztJQUVGLFVBQVUsQ0FBQyxRQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQXRDRCxvQ0FzQ0MifQ==