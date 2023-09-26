"use strict";

class UserStorage{
    static #users = {
        id: ["test", "test1", "test2"],
        password: ["1234", "12345", "123456"],
        name: ["홍길동", "관리자", "회원"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;