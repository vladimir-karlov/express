"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericInMemoryDao = void 0;
const uuid = require('uuid');
class GenericInMemoryDao {
    constructor() {
        this.users = [];
        console.log('Created new instance of GenericInMemoryDao');
    }
    static getInstance() {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }
    addUser(user) {
        return this.users.push({
            id: this.users.length + 1,
            uuid: uuid.v4(),
            username: user.username,
            password: user.password
        });
    }
    getUsers() {
        return this.users;
    }
    getUserById(userId) {
        return this.users.find((user) => user.id === userId);
    }
    putUserById(user) {
        const objIndex = this.users.findIndex((obj) => obj.id === user.id);
        const updatedUsers = [
            ...this.users.slice(0, objIndex),
            user,
            ...this.users.slice(objIndex + 1),
        ];
        this.users = updatedUsers;
        return `${user.id} updated via put`;
    }
    patchUserById(user) {
        const objIndex = this.users.findIndex((obj) => obj.id === user.id);
        if (objIndex == -1) {
            return 'User not found';
        }
        let currentUser = this.users[objIndex];
        for (let i in user) {
            console.log('iterating over user:');
            console.log(i);
            if (i !== 'id') {
                currentUser[i] = user[i];
            }
        }
        this.users = [
            ...this.users.slice(0, objIndex),
            currentUser,
            ...this.users.slice(objIndex + 1),
        ];
        return `${user.id} patched`;
    }
    removeUserById(userId) {
        const objIndex = this.users.findIndex((obj) => obj.id === userId);
        this.users = this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }
}
exports.GenericInMemoryDao = GenericInMemoryDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4ubWVtb3J5LmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYW9zL2luLm1lbW9yeS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCLE1BQWEsa0JBQWtCO0lBSTNCO1FBRkEsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUdaLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDZCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO1lBQzlCLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDMUQ7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ25CLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ2pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakYsTUFBTSxZQUFZLEdBQUc7WUFDakIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO1lBQ2hDLElBQUk7WUFDSixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDcEMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztJQUN4QyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNoQixPQUFPLGdCQUFnQixDQUFDO1NBQzNCO1FBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDWixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO1lBQ2hDLFdBQVc7WUFDWCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDcEMsQ0FBQztRQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBdkVELGdEQXVFQyJ9