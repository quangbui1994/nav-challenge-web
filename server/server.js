import express from 'express';
import serverRenderer from './serverRenderer';

const app = express();

app.get(['/', '/products/*'], serverRenderer);
app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
