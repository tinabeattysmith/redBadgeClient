import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import App from '../../App';
import ItemsHome from '../Items/ItemsHome';
import MealsHome from '../Meals/MealsHome';

class RouteBar extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <ul className="routelist" list-unstyled>
                        <li><Link to="/">App</Link></li>
                        {/* <li><Link to="/home">Home</Link></li> */}
                        <li><Link to="/item">Pantry Items Home</Link></li>
                        <li><Link to="/meal">Meals Home</Link></li>
                    </ul>
                </div> 
                <div>
                    <Switch>
                        <Route exact path="/"><App /></Route>
                        <Route exact path="/item"><ItemsHome /></Route>
                        <Route exact path="/meal"><MealsHome /></Route>
                    </Switch>
                </div>  
           </div>
        );
    };
};

export default RouteBar;