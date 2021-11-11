import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
	/* align-self: top; */
	width: 280px;
	font-size: 0.8em;
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 999;
`;
export const Box = styled.div`
	background: white;
	margin-bottom: 12px;
	font-family: 'Lato', sans-serif;
	border-radius: 4px;
	.boxHeader {
		padding: 10px;
		position: relative;
		padding: 4px 10px;
		font-size: 1em;
		font-weight: 700;
		text-transform: uppercase;
		color: #fff;
		background-color: #75858a;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	.boxContent {
		padding: 10px;
	}
	.boxSwitch {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		p {
			font-size: 13.5px;
			font-weight: 400;
			font-family: Lato, sans-serif;
			color: #333333;
		}
	}
`;

export const Select = styled(ReactSelect)`
	/* margin-bottom: 22px; */
`;
