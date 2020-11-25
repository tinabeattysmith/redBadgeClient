import React, {Component} from 'react';
import PantryItemIndex from '../PantryItems/PantryItemIndex';

const Landing = (props) => {
    return (
        <div>
            <PantryItemIndex token={props.sessionToken} />
        </div>
        )
    }

export default Landing;