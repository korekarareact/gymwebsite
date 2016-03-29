import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,IndexRoute} from 'react-router'
import App from './App'
import About from './About'
import Gym from './Gym'
import Gymlist from './Gymlist'
import Coach from './Coach'
import Coachlist from './Coachlist'
import Secondhand from './Secondhand'
import Extrem from './gym/Extrem'
import Factory from './gym/Factory'
import Tom from './coach/Tom'
import Andy from './coach/Andy'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About} />
            <Route path="/gym" component={Gymlist}>
                <Route path="/gym/Extrem" component={Extrem}/>
                <Route path="/gym/Factory" component={Factory}/>
            </Route>
            <Route path="/coach" component={Coachlist}>
                <Route path="/coach/Tom" component={Tom}/>
                <Route path="/coach/Andy" component={Andy}/>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/secondhand" component={Secondhand} />
        </Route>
    </Router>
), document.getElementById('app'))