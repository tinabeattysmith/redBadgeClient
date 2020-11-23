import React, { Component } from 'react';
import Clock from '../Clock'

let testProp: string = 'Am I getting passed to the Clock component?'
let optionalProp: string = 'You sure are!';

class Content extends Component {
  render() {
    return (
      <div className="main">
        <h2>Lorem ipsum dolor</h2>
        <div className="clock">
          <Clock testProp={testProp} optionalProp={optionalProp} />
        </div>
        <h5>quam pellentesque, Dec 10, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Nisi vitae suscipit..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum. Ornare aenean euismod elementum nisi quis eleifend quam.</p>
        <br />
        <h2>Placerat vestibulum</h2>
        <h5>elementum integer enim neque, Sep 21, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Bibendum est ultricies..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum.</p>
      </div>
    );
  }
}
 
export default Content