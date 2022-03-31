const mysql = require('mysql');
const Chirps = require('./chirps');
const db = require('../db');

export const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'chirprapp',
    password: 'password',
    database: 'chirpr'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

export const all = async () => Query('select * from chirps')

export const create = async () => Query("insert into chirps(userid, content, location) values('4','abcd','Orlando')")

export default {
    Chirps,
    all,
    create
};