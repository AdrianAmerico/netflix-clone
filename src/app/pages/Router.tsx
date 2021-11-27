import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ListPage } from './ListPage'
import { routes } from './routes'

const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.base} component={HomePage} />
                <Route exact path={routes.listPage} component={ListPage} />
            </Switch>
        </BrowserRouter>
  )
}

export default Router
