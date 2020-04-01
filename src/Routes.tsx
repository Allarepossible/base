import React, {useEffect} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchInfo} from 'actions/info';
import HomePage from 'pages/HomePage';

const Routes = ({getInfo}: {getInfo: () => void}) => {
    useEffect(() => {
        getInfo();
    });

    return (
        <Router>
            <Route exact path="/" component={HomePage} />
        </Router>
    );
};

const mapDispatchToProps = {
    getInfo: fetchInfo,
};

export default connect(null, mapDispatchToProps)(Routes);
