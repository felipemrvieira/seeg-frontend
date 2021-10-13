import React, { useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';

import Route from './Route';

// Open routes
import Home from '../pages/Home';

export default function Routes() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/home" exact component={Home} />
			{/* <Route path="/user/register" component={UserRegister} isPrivate /> */}
		</Switch>
	);
}
