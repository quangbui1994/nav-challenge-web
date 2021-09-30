import express from 'express';
import serverRenderer from './serverRenderer';
import path from 'path';

const app = express();
const router = express.Router();
router.get('*', serverRenderer);

app.use('/static', express.static(path.join(__dirname, 'build')));
app.use(router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
