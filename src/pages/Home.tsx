import React from 'react';
import Page from 'pages/Page';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <Page title={'home Page'}>
            Good morning!
            <Link to='/contact' >Контакты</Link>
        </Page>
    );
};

export default {
    component: Home,
};
