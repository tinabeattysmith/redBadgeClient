import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import App from '../../App';
import Home from './Home'
import ItemsHome from '../items/ItemsHome';
import MealsHome from '../meals/MealsHome';

function RouteBar () {
        return (
            <div>
                <div>
                    <ul className="routelist" list-unstyled>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/item">Pantry Items Home</Link></li>
                        <li><Link to="/meal">Meals Home</Link></li>
                    </ul>
                </div> 
                <div>
                    <Switch>
                        {/* route '/' should be unprotected */}
                        <Route exact path="/" component={App} />
                        {/* routes below should be protected */}
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/item" component={ItemsHome} />
                        <Route exact path="/meal" component={MealsHome} />
                    </Switch>
                </div>  
           </div>
        );
    };
export default RouteBar;