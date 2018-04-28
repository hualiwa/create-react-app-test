import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Game from '../components/index'

const element = (
    <Switch>
        <Route path="/game" component={ Game }/>
    </Switch>
)


class Roster extends React.Component {
    render() {
        return element
    }
}

export default Roster;
