import React from 'react';
import {render} from 'react-dom';

import LikeComponent from './components/LikeComponent.jsx';
import FormComponent from './components/FormComponent.jsx';

class App extends React.Component {
  render () {
    return(
    	<div>
    		<p> Hello world.</p>
    		<LikeComponent />
    		<FormComponent />
    	</div>
    	);
  }
}

render(<App/>, document.getElementById('app'));
