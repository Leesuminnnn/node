const express = require('express');
const router = express.Router();
const db = require('../database/connect/maria');


router.get("/", (req, res) => {
    res.send({test : "hi"});
});

router.get('/select', function(req, res) {
    db.query('select * from customer', function(err, rows, fields) {
        if(!err) {
          res.send(rows); // responses send rows
        } else {
          console.log("err : " + err);
          res.send(err);  // response send err
        }
    });
});

module.exports = router;