import React from 'react';
import { components } from 'react-select';
import ContentLoader from 'react-content-loader';
import { Container, Box, Select } from './styles';
import all from '../../assets/img/icon-bubble-color.svg';
import energia from '../../assets/img/icon-energy-color.svg';
import agropecuaria from '../../assets/img/icon-cow-color.svg';
import processosIndustriais from '../../assets/img/icon-factory-color.svg';
import residuos from '../../assets/img/icon-trash-color.svg';
import mudancaDeUsoDaTerraEFloresta from '../../assets/img/icon-tree-color.svg';
import SelectItem from '../SelectItem';
import { MapInfo } from './interfaces';

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
	activeSector,
	activeGas,
	activeYear,
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

	const defaultSectorValue = sectorOptions[0];
	const defaultGasValue = gasOptions[0];

	return (
		<Container>
			<Box>
				<div className="boxHeader">Setor</div>
				<div className="boxContent">
					{defaultSectorValue ? (
						<Select
							defaultValue={defaultSectorValue}
							options={sectorOptions}
							components={{ Option: IconOption }}
						/>
					) : (
						<SelectLoader />
					)}
				</div>
			</Box>
			<Box>
				<div className="boxHeader">Gas</div>
				<div className="boxContent">
					{defaultGasValue ? (
						<Select
							defaultValue={gasOptions[0]}
							name="gas"
							options={gasOptions}
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
