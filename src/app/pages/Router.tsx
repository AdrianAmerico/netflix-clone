import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { routes } from './routes';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.base} component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
