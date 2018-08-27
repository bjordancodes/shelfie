import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Updater from './component/Updater/updater';
import Form from './component/Form/Form'

export default (
    <Switch>
        <Route path="/updater/:id" component={Updater}/>
        <Route exact path="/" component={Form}/>
    </Switch>
)