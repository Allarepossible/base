import React from 'react';
import {shallow} from 'enzyme';

import Page from '../Page';

it('Renders Page', () => {
    const result = shallow(
        <Page title="title">Content</Page>);

    expect(result).toMatchSnapshot();
});
