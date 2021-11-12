import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Container } from './styles';
import MapLegend from '../../components/MapLegend';
import MapFilters from '../../components/MapFilters';
import MapYearFilter from '../../components/MapYearFilter';
import 'leaflet/dist/leaflet.css';
import api from '../../services/api';
import { MapInfoInterface } from './interfaces';
import Map from '../../components/Map';

const MapPage: React.FC = () => {
	const [mapInfo, setMapInfo] = useState<MapInfoInterface>({
		activeLevel: 0,
		allSectorsColor: '#00a8ff',
		defaultEmissionType: 'CO2',
		defaultGas: 0,
		defaultSector: 0,
		sectors: [],
		emissionsTypes: [],
		gases: [],
		states: [],
	});

	const [isCity, setIsCity] = useState(false);
	const [defaultYear, setDefaultYear] = useState(2019);

	function activeSector() {
		return (
			mapInfo.sectors &&
			mapInfo.sectors.filter((obj) => obj.id === mapInfo.defaultSector)[0]
		);
	}

	function activeGas() {
		return (
			mapInfo.gases &&
			mapInfo.gases.filter((obj) => obj.id === mapInfo.defaultGas)[0]
		);
	}

	async function loadStateMapInfo() {
		try {
			const response = await api.get('/map');
			setMapInfo(response.data);
			setDefaultYear(response.data.defaultYear);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	const updateMapInfo = useCallback((updatedValue) => {
		setMapInfo({
			...mapInfo,
			...updatedValue,
		});
	}, []);

	const updatDefaultYear = useCallback((updatedValue) => {
		setDefaultYear(updatedValue);
	}, []);

	const updateTerritoryType = useCallback((value) => {
		setIsCity(value);
	}, []);

	useEffect(() => {
		loadStateMapInfo();
	}, []);

	return (
		<>
			<Nav />
			<Container>
				<Map
					activeSector={activeSector()}
					activeGas={mapInfo.defaultGas}
					activeYear={defaultYear}
					isCity={isCity}
				/>
				{/* {memoizedMapFilter} */}
				<MapFilters
					sectors={mapInfo.sectors}
					gases={mapInfo.gases}
					activeSector={activeSector()}
					activeGas={activeGas()}
					updateTerritoryType={updateTerritoryType}
					isCity={isCity}
				/>
				<MapLegend
					activeSector={activeSector()}
					activeGas={mapInfo.defaultGas}
					activeYear={defaultYear}
				/>
			</Container>
			<MapYearFilter activeYear={defaultYear} updateYear={updatDefaultYear} />
			<Footer />
		</>
	);
};

export default MapPage;
