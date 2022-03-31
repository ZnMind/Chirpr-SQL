const express = require("express");
const router = express.Router();
const db = require('../db');

// REST API
router.get('/', async (req, res) => {
    try {
        res.json(await db.all());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.json((await db.all())[req.params.id - 1]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    };
});

// Create
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        db.Query(`insert into chirps(userid, content, location) values(${req.body.userid}, '${req.body.content}', '${req.body.location}')`);
        //res.json(await db.all());
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
    }
});

// Delete
router.delete("/", (req, res) => {
    let id = req.body.id;
    console.log(req.body.id);
    try {
        db.Query(`delete from chirps where id = ${req.body.id}`)
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
    }
});

// Update
router.put("/", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        db.Query(`update chirps set content = '${req.body.content}' where id = ${req.body.id}`)
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;