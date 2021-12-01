import React, { useState, useEffect, useCallback } from 'react';
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
		sectors: [],
		emissionsTypes: [],
		gases: [],
		states: [],
	});

	const [isCity, setIsCity] = useState(false);
	const [defaultYear, setDefaultYear] = useState(2019);
	const [defaultSector, setDefaultSector] = useState(0);
	const [defaultGas, setDefaultGas] = useState(6);

	function activeSector() {
		return (
			mapInfo.sectors &&
			mapInfo.sectors.filter((obj) => obj.id === defaultSector)[0]
		);
	}

	function activeGas() {
		return (
			mapInfo.gases && mapInfo.gases.filter((obj) => obj.id === defaultGas)[0]
		);
	}

	async function loadStateMapInfo() {
		try {
			const response = await api.get('/map');
			setMapInfo(response.data);
			setDefaultYear(response.data.defaultYear);
			setDefaultSector(response.data.defaultSector);
			setDefaultGas(response.data.defaultGas);
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

	const updateDefaultSector = useCallback((value) => {
		setDefaultSector(value);
	}, []);

	const updateDefaultGas = useCallback((value) => {
		setDefaultGas(value);
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
					activeGas={defaultGas}
					activeYear={defaultYear}
					isCity={isCity}
				/>
				{/* {memoizedMapFilter} */}
				<MapFilters
					sectors={mapInfo.sectors}
					gases={mapInfo.gases}
					activeSector={activeSector()}
					activeGas={activeGas()}
					isCity={isCity}
					updateTerritoryType={updateTerritoryType}
					updateDefaultSector={updateDefaultSector}
					updateDefaultGas={updateDefaultGas}
				/>
				<MapLegend
					activeSector={activeSector()}
					activeGas={defaultGas}
					activeYear={defaultYear}
				/>
			</Container>
			<MapYearFilter activeYear={defaultYear} updateYear={updatDefaultYear} />
			<Footer />
		</>
	);
};

export default MapPage;
