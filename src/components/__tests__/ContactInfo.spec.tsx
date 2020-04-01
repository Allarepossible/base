import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ContactInfo, {ContactBox} from '../ContactInfo';

it('Renders correct contact styles', () => {
    const result = renderer.create(<ContactBox>text</ContactBox>).toJSON();

    expect(result).toMatchSnapshot();
});

it('Renders ContactInfo', () => {
    const result = renderer.create(
        <ContactInfo
            id={1}
            name="name"
            phone="phoneNumber"
        />).toJSON();

    expect(result).toMatchSnapshot();
});
