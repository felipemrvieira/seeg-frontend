import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

const Routes = React.lazy(() => import('./routes'));

function App(): JSX.Element {
	return (
		<HashRouter>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes />
			</Suspense>
		</HashRouter>
	);
}

export default App;
