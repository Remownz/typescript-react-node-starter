import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import router from './router';
const app = express();

app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve('build')));
app.use('/', router);

app.listen('8080', () => {
    console.log(('App is running at http://localhost:8080 in dev mode'));
    console.log('Press CTRL-C to stop\n');
});