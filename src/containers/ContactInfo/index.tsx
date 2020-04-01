import {connect} from 'react-redux';

import {State, ContactId} from 'entities/contact';
import ContactInfo from 'components/ContactInfo';

interface Props {
    contactId: ContactId;
}

export const mapStateToProps = ({contact}: State, {contactId}: Props) => {
    const {name, phone, id} = contact.data[contactId] || {};

    return {name, phone, id};
};

export default connect(mapStateToProps)(ContactInfo);
