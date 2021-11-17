import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {
	MapContainer,
	TileLayer,
	ZoomControl,
	WMSTileLayer,
	useMapEvents,
	useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NumberFormat from 'react-number-format';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Chart from 'react-apexcharts';
import { MapInfo, PositionState } from './interfaces';
import { StyledPop as Popup } from './styles';
import Header from '../Header';
import api from '../../services/api';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
	<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const Map: React.FC<MapInfo> = ({
	activeSector,
	activeGas,
	activeYear,
	isCity,
}) => {
	const [showTiles, setShowTiles] = useState(false);
	const [popUpPosition, setPopUpPosition] = useState<PositionState>({
		lat: 0,
		lng: 0,
	});
	const layerName = isCity
		? 'seeg-latest-version:geoserver_cities'
		: 'seeg8-br-plataform-staging:seeg8-staging-geoserver-states';

	const [showPopUp, setShowPopUp] = useState(false);
	const [open, setOpen] = useState(false);
	const [snackOpen, setSnackOpen] = useState(false);
	const [popUpInfo, setPopUpInfo] = useState({
		area: 0,
		gas_id: 0,
		ibge_cod: 0,
		id: 0,
		max_emission_of_same_type_sector_gas_and_year: 0.0,
		name: '',
		rank: 0,
		sector_id: 0,
		slug: '',
		total_emission: 0.0,
		total_population: 0,
		urban_population: 0,
		year: 2020,
	});
	const [totalAllocatedEmission, setTotalAllocatedEmission] = useState('0,0');
	const [zoom, setZoom] = useState(4);

	const options = {
		toolbar: {
			show: true,
			tools: {
				download: true,
			},
		},
		labels: ['Comedy', 'Action', 'Romance', 'Drama', 'SciFi'],
		legend: {
			show: false,
		},
	};
	const series = [4, 5, 6, 1, 5]; // our data
	// const [series, setSeries] = useState([
	// 	{
	// 		name: 'series-1',
	// 		data: [30, 40, 45, 50, 49, 60, 70, 91],
	// 	},
	// ]);

	const handleClose = () => {
		setOpen(false);
	};
	async function getPopUpChartInfo(slug: string) {
		try {
			const response = await api.get(
				`/territories/${slug}/popup_chart?sector=all&year=${activeYear}&gas=${activeGas}`
			);

			setTotalAllocatedEmission(response.data.total_allocated_emission);
			console.log(response.data);
		} catch (err) {
			// console.tron.log(err);
		}
	}

	async function getPopUpInfo(mapSize: any, bbox: any, relativePoint: any) {
		try {
			const urlPath = 'https://geoserver.ecostage.com.br/geoserver/wfs';

			const params = [
				['request', 'GetFeatureInfo'],
				['service', 'WMS'],
				['version', '1.3.0'],
				['layers', layerName],
				['query_layers', layerName],
				['styles', ''],
				['crs', 'EPSG:4674'],
				[
					'bbox',
					`${bbox.southWest.lat},${bbox.southWest.lng},${bbox.northEast.lat},${bbox.northEast.lng}`,
				],
				['width', mapSize.x],
				['height', mapSize.y],
				['info_format', 'application/json'],
				['feature_count', 1],
				['i', Math.round(relativePoint.x)],
				['j', Math.round(relativePoint.y)],
				['exceptions', 'application/json'],
				[
					'cql_filter',
					`year=${activeYear} and sector_id=${activeSector.id} and gas_id=${activeGas}`,
				],
				[
					'propertyName',
					'id,slug,name,ibge_cod,year,gas_id,sector_id,rank,total_population,urban_population,area,total_emission,max_emission_of_same_type_sector_gas_and_year',
				], // essas são todas as props disponíveis para serem consultadas. "id" é um territory_id
			];

			const response = await axios.get(
				`${urlPath}?${params.map((e) => e.join('=')).join('&')}`
			);
			console.log(response.data.features[0].properties);
			setPopUpInfo(response.data.features[0].properties);
			getPopUpChartInfo(response.data.features[0].properties.slug);
		} catch (err) {
			setOpen(false);
			setSnackOpen(true);
			console.log(err);
		}
	}

	function MapChildComponent() {
		useEffect(() => {
			console.log('Render Map Child');
		}, []);

		const map = useMap();
		const mapEvents = useMapEvents({
			popupopen: (e) => {
				// getPopUpChartInfo();
				setOpen(false);
				console.log('open');
			},
			popupclose: (e) => {
				setShowPopUp(false);
				setTotalAllocatedEmission('0,0');
			},
			click: (event) => {
				setOpen(true);
				const { lat, lng } = event.latlng;
				const mapSize = {
					x: map.getSize().x,
					y: map.getSize().y,
				};

				const bbox = {
					southWest: map.getBounds().getSouthWest(),
					northEast: map.getBounds().getNorthEast(),
				};

				const relativePoint = map.latLngToContainerPoint(event.latlng);

				getPopUpInfo(mapSize, bbox, relativePoint);

				setShowPopUp(true);
				setPopUpPosition({
					lat,
					lng,
				});
			},
		});
		return null;
	}

	useEffect(() => {
		// Add delay prevent map rendering wrong tiles
		setTimeout(() => {
			setShowTiles(true);
		}, 1000);
	}, []);

	useEffect(() => {
		setShowTiles(false);
		// Add delay to re-render tiles
		setTimeout(() => {
			setShowTiles(true);
		}, 100);
	}, [isCity, activeSector, activeGas, activeYear]);

	const layerParams = `year=${activeYear} and sector_id=${activeSector?.id} and gas_id=${activeGas}`;
	// console.log(layerParams);

	const memoizedStateTile = useMemo(
		() => (
			<WMSTileLayer
				url={`https://geoserver.ecostage.com.br/geoserver/ows?cql_filter=${layerParams}`}
				layers="seeg8-br-plataform-staging:seeg8-staging-geoserver-states"
				format="image/png"
				transparent
			/>
		),
		[activeSector, activeYear, activeGas]
	);

	const memoizedCityTile = useMemo(
		() => (
			<WMSTileLayer
				url={`https://geoserver.ecostage.com.br/geoserver/ows?cql_filter=${layerParams}`}
				layers="seeg-latest-version:geoserver_cities"
				format="image/png"
				transparent
			/>
		),
		[activeSector, activeYear, activeGas]
	);

	const handleSnackClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackOpen(false);
	};

	return (
		<>
			<Snackbar
				open={snackOpen}
				autoHideDuration={3000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				<Alert
					onClose={handleSnackClose}
					severity="warning"
					sx={{ width: '100%' }}
				>
					Invalid territory!
				</Alert>
			</Snackbar>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
				onClick={handleClose}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<MapContainer
				zoomControl={false}
				center={[-18.5, -54]}
				zoom={zoom}
				scrollWheelZoom={false}
			>
				<MapChildComponent />
				<ZoomControl position="topright" />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{showTiles && activeSector && (
					<>
						{isCity ? memoizedCityTile : memoizedStateTile}

						{/* <WMSTileLayer
							url="https://geoserver.ecostage.com.br/geoserver/ows?"
							layers="seeg-latest-version:dashboard_states-static-layer"
							format="image/png"
							transparent
						/> */}
						{/* <WMSTileLayer
							url="https://geoserver.ecostage.com.br/geoserver/ows?"
							layers="seeg-latest-version:dashboard_biomes-static-layer"
							format="image/png"
							transparent
						/> */}
					</>
				)}
				{showPopUp && totalAllocatedEmission !== '0,0' && (
					<Popup position={[popUpPosition.lat, popUpPosition.lng]}>
						{/* Latitude {popUpPosition.lat}.
						<br />
						Longitude {popUpPosition.lng}. */}
						<div className="popUpHeader">
							<img
								src={`https://s3-sa-east-1.amazonaws.com/seeg.ecostage.com.br/flags/${popUpInfo.ibge_cod}.jpg`}
								alt="flag"
							/>
							<span>{popUpInfo.name}</span>
						</div>
						<div className="popUpTerritoryInfo">
							<div className="info">
								<div className="label">Total Pop.</div>
								<div className="value">
									<NumberFormat
										thousandSeparator
										prefix=""
										displayType="text"
										value={popUpInfo.total_population}
									/>
								</div>
							</div>
							<div className="info">
								<div className="label">Area</div>
								<div className="value">
									<NumberFormat
										thousandSeparator
										prefix=""
										displayType="text"
										value={popUpInfo.area}
									/>
								</div>
							</div>
							<div className="info">
								<div className="label">Ranking</div>
								<div className="value">{popUpInfo.rank}</div>
							</div>
						</div>
						<div className="popUpEmissionInfo">
							<div className="label">Emissions allocated in the state</div>
							<div className="value">
								<NumberFormat
									thousandSeparator
									prefix=""
									displayType="text"
									value={totalAllocatedEmission?.replaceAll('.', '')}
								/>{' '}
								ton
							</div>
						</div>
						<div className="popUpGraphic">
							<Chart
								options={options}
								series={series}
								type="pie"
								width="100%"
							/>
						</div>
						<div className="popUpButton">
							<a href="/">View territory details</a>
						</div>
					</Popup>
				)}
			</MapContainer>
		</>
	);
};

export default Map;
