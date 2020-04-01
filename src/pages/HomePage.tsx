import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import ContactInfo from 'containers/ContactInfo';
import {fetchContact} from 'actions/contact';
import {State} from 'entities/info';
import {ContactId} from 'entities/contact';
import Page from 'pages/Page';

interface Props {
    title: string;
    contactId: ContactId;
    getContact: (p: number) => void;
}

const HomePage = ({title, contactId, getContact}: Props) => {
    useEffect(() => {
        if (contactId) {
            getContact(contactId);
        }
    }, [contactId, getContact]);

    return (
        <Page title={title}>
            {contactId && <ContactInfo contactId={contactId}/>}
        </Page>
    );
};

export const mapStateToProps = ({info}: State) => {
    const {name, contactId} = info.data || {};

    return {title: name, contactId};
};

const mapDispatchToProps = {
    getContact: fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
