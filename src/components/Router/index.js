import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Photo from '../pages/Photo';
import Gallery from '../pages/Gallery';

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/photo' component={Photo} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/gallery' component={Gallery} />
        </Switch>
    )
}

