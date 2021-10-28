import React from 'react';
import { components } from 'react-select';
import { Container, Box, Select } from './styles';
import bubble from '../../assets/img/icon-bubble-color.svg';
import energy from '../../assets/img/icon-energy-color.svg';
import cow from '../../assets/img/icon-cow-color.svg';
import factory from '../../assets/img/icon-factory-color.svg';
import trash from '../../assets/img/icon-trash-color.svg';
import tree from '../../assets/img/icon-tree-color.svg';
import SelectItem from '../SelectItem';

const solutionOfOptions = [
	{ id: 'mitigation', title: 'Emissões totais', icon: bubble },
	{ id: 'adaptation', title: 'Energia', icon: energy },
	{ id: 'x', title: 'Agropecuária', icon: cow },
	{ id: 'x', title: 'Processos Industriais', icon: factory },
	{ id: 'x', title: 'Resíduos', icon: trash },
	{ id: 'x', title: 'Mudança e uso da terra e florestas', icon: tree },
].map((item) => ({
	value: item.id,
	label: item.title,
	icon: item.icon,
}));

const gasesOptions = [
	{ id: '1', title: 'CO2e (t) GWP-AR5' },
	{ id: '2', title: 'CO2e (t) GWP-AR2' },
	{ id: '3', title: 'CO2e (t) GWP-AR4' },
	{ id: '4', title: 'CO2e (t) GTP-AR5' },
	{ id: '5', title: 'CO2e (t) GTP-AR2' },
	{ id: '6', title: 'CO2e (t) GTP-AR4' },

	{ id: '7', title: 'CO2 (t)' },
	{ id: '9', title: 'CO (t)' },
	{ id: '10', title: 'CH4 (t)' },
	{ id: '11', title: 'NOx (t)' },
	{ id: '12', title: 'N2O (t)' },
].map((item) => ({
	value: item.id,
	label: item.title,
}));

const { Option } = components;
const IconOption: React.FC = (props: any) => {
	const { data } = props;
	return (
		<Option {...props}>
			<SelectItem icon={data.icon} label={data.label} />
		</Option>
	);
};

const MapFilters: React.FC = () => (
	<Container>
		<Box>
			<div className="boxHeader">Setor</div>
			<div className="boxContent">
				<Select
					defaultValue={solutionOfOptions[0]}
					name="color"
					options={solutionOfOptions}
					components={{ Option: IconOption }}
				/>
			</div>
		</Box>
		<Box>
			<div className="boxHeader">Gas</div>
			<div className="boxContent">
				<Select
					defaultValue={gasesOptions[0]}
					name="gas"
					options={gasesOptions}
				/>
			</div>
		</Box>
	</Container>
);

export default MapFilters;
