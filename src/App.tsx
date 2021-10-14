import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './globalStyles';

const Routes = React.lazy(() => import('./routes'));

function App(): JSX.Element {
	return (
		<HashRouter>
			<Suspense fallback={<h1>Loading...</h1>}>
				<GlobalStyle />
				<Routes />
			</Suspense>
		</HashRouter>
	);
}

export default App;
