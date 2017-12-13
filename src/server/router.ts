import * as express from 'express';

const path = require('path');
const router = express.Router();

router.get('/api', (req, res, next) => {
    res.status(200).json({ great: 'great' });
});

// router.get('*', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
//     res.sendFile(path.resolve('build/index.html'));
// });

export default router;
