import React from 'react';
import { components } from 'react-select';
import ContentLoader from 'react-content-loader';
import Switch from '@mui/material/Switch';
import { Container, Box, Select } from './styles';
import all from '../../assets/img/icon-bubble-color.svg';
import energia from '../../assets/img/icon-energy-color.svg';
import agropecuaria from '../../assets/img/icon-cow-color.svg';
import processosIndustriais from '../../assets/img/icon-factory-color.svg';
import residuos from '../../assets/img/icon-trash-color.svg';
import mudancaDeUsoDaTerraEFloresta from '../../assets/img/icon-tree-color.svg';
import SelectItem from '../SelectItem';
import { SectorSelectItem, GasSelectItem, MapInfo } from './interfaces';

const SelectLoader = () => (
	<ContentLoader
		style={{ width: '100%' }}
		speed={2}
		width={400}
		// height={150}
		viewBox="0 0 400 55"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		// {...props}
	>
		<rect x="0" y="0" rx="8" ry="8" width="100%" height="55" />
	</ContentLoader>
);

function getIcon(slug: string): any {
	switch (slug) {
		case 'all':
			return all;
		case 'energia':
			return energia;
		case 'agropecuaria':
			return agropecuaria;
		case 'residuos':
			return residuos;
		case 'processos-industriais':
			return processosIndustriais;
		case 'mudanca-de-uso-da-terra-e-floresta':
			return mudancaDeUsoDaTerraEFloresta;
		default:
			return all;
	}
}

const { Option } = components;
const IconOption: React.FC = (props: any) => {
	const { data } = props;
	return (
		<Option {...props}>
			<SelectItem icon={data.icon} label={data.label} />
		</Option>
	);
};

const MapFilters: React.FC<MapInfo> = ({
	sectors,
	gases,
	activeSector = {
		id: 0,
		name: 'Total Emissions',
		slug: 'all',
	},
	activeGas = {
		id: 6,
		name: 'CO2e (t) GWP-AR5',
		slug: 'co2e-t-gwp-ar5',
	},
	isCity,
	updateTerritoryType,
	updateDefaultSector,
	updateDefaultGas,
}) => {
	const sectorOptions = sectors.map((item) => ({
		value: item.id,
		label: item.name,
		icon: getIcon(item.slug),
	}));

	const gasOptions = gases.map((item) => ({
		value: item.id,
		label: item.name,
	}));

	const defaultSectorValue = {
		value: activeSector.id,
		label: activeSector.name,
		icon: getIcon(activeSector.slug),
	};

	const defaultGasValue = {
		value: activeGas.id,
		label: activeGas.name,
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateTerritoryType(event.target.checked);
	};

	const handleSectorChange = (sector: SectorSelectItem) => {
		updateDefaultSector(sector.value);
	};
	const handleGasChange = (gas: GasSelectItem) => {
		updateDefaultGas(gas.value);
	};

	return (
		<Container>
			<Box>
				<div className="boxHeader">Territ??rio</div>
				<div className="boxContent boxSwitch">
					<p>Estados</p>
					<Switch
						checked={isCity}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<p>Cidades</p>
				</div>
			</Box>
			<Box>
				<div className="boxHeader">Setor</div>
				<div className="boxContent">
					{sectors.length > 0 ? (
						<Select
							defaultValue={defaultSectorValue}
							options={sectorOptions}
							components={{ Option: IconOption }}
							onChange={handleSectorChange}
						/>
					) : (
						<SelectLoader />
					)}
				</div>
			</Box>
			<Box>
				<div className="boxHeader">Gas</div>
				<div className="boxContent">
					{gases.length > 0 ? (
						<Select
							defaultValue={defaultGasValue}
							name="gas"
							options={gasOptions}
							onChange={handleGasChange}
						/>
					) : (
						<SelectLoader />
					)}
				</div>
			</Box>
		</Container>
	);
};

export default MapFilters;
