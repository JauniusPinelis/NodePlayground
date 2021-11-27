import {Application, Request, Response} from 'express';

function routes(app: Application) {
    app.get("/healthcheck", (req,res) => {
        res.sendStatus(200);
    })
}

export default routes;