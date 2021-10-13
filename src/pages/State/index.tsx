import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { Container } from './styles';

const State: React.FC = () => (
	<>
		<Nav />
		<Container>state</Container>
		<Footer />
	</>
);

export default State;
