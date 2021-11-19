import express, {Application} from 'express';

import config from 'config';

const port:number = config.get<number>('port');

const app:Application = express();

console.log("Hello world from");

app.listen(port, () => {
    console.log(`Starting on port ${port}`);
})
