"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login () {
        const client = this.body;
        try{
            
            const { id, password } = await UserStorage.getUserInfo(client.id);
            console.log("user.id : "+id);
            console.log("user.password : "+password);
            // console.log(id);     // buffer
            // console.log(password);       //buffer
            // const idstring = id.toString();
            // const pwstring = password.toString();
            // console.log("idstring "+idstring);
            // console.log("pwstring "+pwstring);
            console.log(client.id);     // test3
            console.log(client.password);       // 1234

            if (id) {

                // const savedPassword = password.toString();
                // console.log(savedPassword);
                if ( id === client.id && password === client.password) {
                    return { success: true };
                }
                return {success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success:false, msg: "존재하지 않는 아이디입니다." }
        }catch (err) {
            return { success:false, msg: "로그인 중 오류가 발생했습니다." };
        }
        
    }

    async register () {
        const client = this.body
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err }
        }
        
    }

}

module.exports = User;