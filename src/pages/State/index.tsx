import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import MapLegend from '../../components/MapLegend';
import MapFilters from '../../components/MapFilters';
import MapYearFilter from '../../components/MapYearFilter';
import 'leaflet/dist/leaflet.css';

const State: React.FC = () => (
	<>
		<Nav />
		<Container>
			<MapContainer
				zoomControl={false}
				center={[-14.1403536, -53.5436177]}
				zoom={4}
				scrollWheelZoom={false}
			>
				<ZoomControl position="topright" />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
			<MapFilters />
			<MapLegend />
		</Container>
		<MapYearFilter />
		<Footer />
	</>
);

export default State;
