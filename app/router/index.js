import express from "express";
import bodyParser from "body-parser";
import Controllers from "../controllers/index.js";

const dirname = './app/public';

const routes = (app) => {
    app.use(
        bodyParser.urlencoded({ extended: false}),
        express.static(dirname)
    )

    app.route('/')
        .get((req, res) => {
            res.status(200).sendFile('index.html', { root: dirname });
        })
        .post((req, res) => {
            console.log(req.body)
            res.redirect('/')
        })
}

export default routes;