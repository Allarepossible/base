import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {shallow} from 'enzyme';

import {Info} from 'entities/info';

import HomePage, {mapStateToProps} from '../HomePage';

const info: Info = {
    name: 'MEDSI',
    contactId: 1,
};

it('Renders Home Page', () => {
    const result = shallow(<Router><Route exact path="/" component={HomePage} /></Router>);

    expect(result).toMatchSnapshot();
});

describe('Home Page', () => {
    it('mapStateToProps() select info, if it is in state', () => {
        const state = {
            info: {
                data: info,
            },
        };
        const expectedResult = {
            title: 'MEDSI',
            contactId: 1,
        };

        expect(mapStateToProps(state)).toEqual(expectedResult);
    });
});
