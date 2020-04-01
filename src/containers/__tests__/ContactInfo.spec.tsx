import {mapStateToProps} from '../ContactInfo';
import {Contact, ContactId} from 'entities/contact';

const CONTACT_ID: ContactId = 1;
const contact: Contact = {
    id: CONTACT_ID,
    name: 'Anna',
    phone: '+7 (111) 123-4567',
};

describe('Contact Info', () => {
    it('mapStateToProps() select contact info, if it is in state', () => {
        const state = {
            contact: {
                data: {
                    [CONTACT_ID]: contact,
                },
            },
        };

        expect(mapStateToProps(state, {contactId: CONTACT_ID})).toEqual(contact);
    });

    it('mapStateToProps() return {}, if isn`t in state', () => {
        const state = {
            contact: {
                data: {},
            },
        };

        expect(mapStateToProps(state, {contactId: CONTACT_ID})).toEqual({});
    });
});
