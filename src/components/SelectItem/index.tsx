import React from 'react';
import { Container } from './styles';

interface SelectItemProps {
	icon: any;
	label: string;
}

const SelectItem: React.FC<SelectItemProps> = ({
	icon,
	label,
}: SelectItemProps) => (
	<Container>
		<img src={icon} alt={label} />
		<div className="label"> {label}</div>
	</Container>
);

export default SelectItem;
