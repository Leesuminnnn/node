"use strict";

const fs = require("fs").promises;
const { resolve } = require("path");
const db = require("../../database/connect/maria");
const { rejects } = require("assert");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        // console.log(data);
        console.log(data[0]);
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });

    // 파일 DB 접근
    // return fs
    // .readFile("./server/src/databases/users.json")
    // .then((data) => {
    //     return this.#getUserInfo(data, id);

    // })
    // .catch(console.error);
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`); // 실제 서비스 시에는 변경해야함
          else resolve({ success: true });
        }
      );
    });
  }

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

module.exports = UserStorage;
