import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import MapLegend from '../../components/MapLegend';
import MapFilters from '../../components/MapFilters';
import MapYearFilter from '../../components/MapYearFilter';

const State: React.FC = () => (
	<>
		<Nav />
		<Container>
			<MapFilters />
			<MapLegend />
		</Container>
		<MapYearFilter />
		<Footer />
	</>
);

export default State;
