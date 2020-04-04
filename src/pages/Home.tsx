import React from 'react';
import {ContactId} from 'entities/contact';
import Page from 'pages/Page';
import {Link} from "react-router-dom";

interface Props {
    title: string;
    contactId: ContactId;
    getContact: (p: number) => void;
}

const Home = ({}: Props) => {
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
