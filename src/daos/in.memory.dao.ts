const uuid = require('uuid');

export class GenericInMemoryDao {
    private static instance: GenericInMemoryDao;
    users: any = [];

    constructor() {
        console.log('Created new instance of GenericInMemoryDao');
    }

    static getInstance(): GenericInMemoryDao {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }

    addUser(user: any) {
        return this.users.push({
            id: this.users.length + 1,
            uuid: uuid.v4(),
            username: user.username,
            password: user.password,
            email: user.email,
        });
    }

    getUsers() {
        return this.users;
    }

    getUserById(userId: number) {
        return this.users.find((user: { id: string; }) => user.id === userId);
    }

    getByEmail(email: string) {
        return this.users.find((user: { email: string; }) => user.email === email);        
    }

    putUserById(user: any) {
        const objIndex = this.users.findIndex((obj: { id: any; }) => obj.id === user.id);
        const updatedUsers = [
            ...this.users.slice(0, objIndex),
            user,
            ...this.users.slice(objIndex + 1),
        ];
        this.users = updatedUsers;
        return `${user.id} updated via put`;
    }

    patchUserById(user: any) {
        const objIndex = this.users.findIndex((obj: { id: any; }) => obj.id === user.id);
        if (objIndex == -1) {
            return 'User not found'; 
        }

        let currentUser = this.users[objIndex];

        for (let i in user) {
            console.log('iterating over user:')
            console.log(i)
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

    removeUserById(userId: string) {
        const objIndex = this.users.findIndex((obj: { id: any; }) => obj.id === userId);
        this.users = this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }
}