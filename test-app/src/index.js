import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import TestStore from './stores/TestStore';

const Root = (
	<Provider TestStore={TestStore}>
	<App/>
	</Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
