import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import TestStore from './stores/TestStore';


const Root = (
	<Provider TestStore={TestStore}>
		<BrowserRouter>
			<main>
				<Switch>
					<Route exact path={"/"} component={App} />
					<Route exact path={"/today"} component={App} />
					<Route exact path={"/:date"} component={App} />
					<Route exact path={"/:date/:time"} component={App} />
					<Route render={() =>
						<div id="pageNotFound">
            				404
            				<br />
            				Page Not Found
            			</div>
            		} />
				</Switch>
			</main>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
