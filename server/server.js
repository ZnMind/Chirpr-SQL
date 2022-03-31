import * as path from 'path';
import * as express from 'express';
import apiRouter from './routes';

const cors = require('cors');
const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(cors());
app.use(express.json());
app.use(express.static(p));
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
