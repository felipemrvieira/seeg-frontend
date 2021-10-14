import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import MapLegend from '../../components/MapLegend';

const State: React.FC = () => (
	<>
		<Nav />
		<Container>
			<MapLegend />
		</Container>
		<Footer />
	</>
);

export default State;
