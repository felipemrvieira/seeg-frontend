import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import Loader from './components/Loader';

import GlobalStyle from './globalStyles';

const Routes = React.lazy(() => import('./routes'));

function App(): JSX.Element {
	return (
		<HashRouter>
			<Suspense fallback={<Loader />}>
				<GlobalStyle />
				<Routes />
			</Suspense>
		</HashRouter>
	);
}

export default App;
