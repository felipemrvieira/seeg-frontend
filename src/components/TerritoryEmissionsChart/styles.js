import styled from 'styled-components';
import cow from '../../assets/img/icon-cow-dark.svg';
import energy from '../../assets/img/icon-energy-dark.svg';
import factory from '../../assets/img/icon-factory-dark.svg';
import tree from '../../assets/img/icon-tree-dark.svg';
import trash from '../../assets/img/icon-trash-dark.svg';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: #f9f9f9;
	justify-content: space-between;
	padding: 40px 22px;
	.label {
		font-size: 1em;
		font-weight: 700;
	}
	.switches {
		display: flex;
		flex-direction: row;
		.boxSwitch {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-right: 16px;
		}
	}
`;
