import express from 'express';
import serverRenderer from './serverRenderer';

const app = express();
const router = express.Router();
router.get('*', serverRenderer);

app.use(express.static('build'));
app.use(router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
