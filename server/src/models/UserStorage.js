"use strict";

const fs = require("fs").promises;
const { resolve } = require("path");
const db = require("../../database/connect/maria");
const { rejects } = require("assert");

class UserStorage{
    static #getUserInfo(data, id) {
        const users = JSON.parse(data)
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            
            return newUser;
        }, {});

        return userInfo;
    }
    
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        // 파일 DB 접근
        // return fs
        // .readFile("./server/src/databases/users.json")
        // .then((data) => {
        //     return this.#getUsers(data, isAll, fields);
            
        // })
        // .catch(console.error);
        // // const users = this.#users;
        
    }

    static getUserInfo(id) {
        // 파일 DB 접근
        // return fs
        // .readFile("./server/src/databases/users.json")
        // .then((data) => {
        //     return this.#getUserInfo(data, id);
            
        // })
        // .catch(console.error);

        return new Promise((resolve, reject) => {
            db.query("select * from users where id = ?", [id], (err, data) => {
                // if(err) reject(err);
                
                // console.log(data[0]);
                // resolve(data[0]);

                if (err) {
                    reject(err);
                } else if (data && data.length > 0) {
                    const user = data[0];
                    // Assuming that the 'name' column is correctly encoded
                    user.name = user.name ? user.name.toString() : null;
                    console.log(user);
                    resolve(user);
                } else {
                    resolve(null); // User not found
                }
            });
        });
        
    }

    

    static async save(userInfo) {
        // 파일 DB 접근
        // const users = await this.getUsers(true);
        // if (users.id.includes(userInfo.id)) {
        //     throw "이미 존재하는 아이디입니다.";
        // }
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.password.push(userInfo.password);
        // // 데이터 추가
        // fs.writeFile("./server/src/databases/users.json", JSON.stringify(users));
        // return { success: true};
    }
}

module.exports = UserStorage;