import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';


dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

app.get('*', (req, res) => {
    if (ENV === 'development') {
        const webpackConfig = require('../../webpack.config');
        const webpackDevMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');
        const compiler = webpack(webpackConfig);
        const serverConfig = { port: PORT, hot: true };

        app.use(webpackDevMiddleware(compiler, serverConfig));
        app.use(webpackHotMiddleware(compiler));
    }
    res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running in http://localhost:3000');
    }
});