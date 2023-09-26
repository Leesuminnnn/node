"use strict";

const output = {
     home: (request,response) => {
        response.render("index");
    },    
    login:  (request,response) => {
        response.render("login");
    },
};

const users = {
    id: ["test","test1", "test2"],
    password: ["1234","12345","123456"],
};

const process = {
    login: function (request, response){
        // const id = request.body.id,
        //     password = request.body.password
        console.log(request.body);

    },
}
module.exports  = {
    output,
    process,
};