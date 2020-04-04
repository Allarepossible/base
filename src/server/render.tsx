import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import createStore from './createStore';
import { Provider } from 'react-redux';
import { renderRoutes, matchRoutes} from 'react-router-config';
import Routes from '../Routes';
import {Helmet} from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import serialize from 'serialize-javascript';

const store = createStore();

export default ({clientStats}) => (req, res) => {
    const promises = matchRoutes(Routes, req.path)
        .map(({route}) => {route.loadData ? route.loadData(store) : null});

    Promise.all(promises).then(() => {
        const context = {status: 200, url: ''};

        const app = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.originalUrl} context={context}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
         );

        const helmet = Helmet.renderStatic();

        const { js, styles } = flushChunks(clientStats, {
            chunkNames: flushChunkNames(),
        });

        const status = context.status || 200;

        if (context.status == 404) {
            console.log('Error 404: ', req.originalUrl);
        }

        if (context.url) {
            const redirectStatus = context.status || 302;

            res.redirect(redirectStatus, context.url);
            return;
        }

        res.status(status)
            .cookie('locale', 'lang', {
                maxAge: 100,
                httpOnly: false,
            })
            .header('Content-Type', 'text/html')
            .send(`<!DOCTYPE html>
                <html lang='ru'>
                    <head>
                        <meta name='theme-color' content='#000000'/>
                        ${styles}
                        ${helmet.title}
                        ${helmet.meta.toString()}
                        ${helmet.link.toString()}
                    </head>
                    <body>
                        <div id='react-root'>${app}</div>
                        ${js}
                        <script>window.REDUX_DATA = ${serialize(store.getState())}</script>
                    </body>
                </html>`,
            );
    });
};
