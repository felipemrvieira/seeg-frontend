import styled from 'styled-components';

const handleLinearGradient = (sectorSlug) => {
	switch (sectorSlug) {
		case 'all':
			return `linear-gradient(90deg, #c8cbcf 0%, #37474f 100%);`;
		case 'energia':
			return `linear-gradient(90deg, #fc9a95 0%, #bd2922 100%);`;
		case 'agropecuaria':
			return `linear-gradient(90deg, #faf49d 0%, #c9c036 100%);`;
		case 'processos-industriais':
			return `linear-gradient(90deg, #ad9692 0%, #573730 100%);`;
		case 'residuos':
			return `linear-gradient(90deg, #8eccf5 0%, #2d87c2 100%);`;
		case 'mudanca-de-uso-da-terra-e-floresta':
			return `linear-gradient(90deg, #cbe882 0%, #8db32d 100%);`;
		default:
			return `linear-gradient(90deg, #c8cbcf 0%, #37474f 100%);`;
	}
};

export const Container = styled.div`
	/* align-self: end; */
	position: absolute;
	bottom: 10px;
	right: 10px;
	z-index: 999;
	width: 300px;
	font-size: 0.8em;
`;
export const Box = styled.div`
	padding: 10px;
	background: white;
	border-radius: 4px;
	text-align: center;
	margin-bottom: 12px;
	font-family: 'Lato', sans-serif;
`;
export const BoxLabel = styled.p`
	padding: 0;
	font-size: 12.8px;
	font-family: 'Lato', sans-serif;
`;
export const BoxValue = styled.p`
	padding: 0;
	margin-bottom: 12px;
	display: block;
	font-weight: 700;
	font-size: 12.8px;
	font-family: 'Lato', sans-serif;
`;
export const BoxNote = styled.p`
	color: #999999;
`;
export const Range = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding-bottom: 6px;
	margin-bottom: 6px;
	border-bottom: 1px solid #aaa;
	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 6px;
		width: 1px;
		background-color: #aaa;
	}

	&::left {
		right: 0;
	}

	&::after {
		right: 0;
	}
`;
export const RangeGradient = styled.p`
	height: 20px;
	background: ${({ sectorSlug }) => handleLinearGradient(sectorSlug)};
`;

export const BoxGradientNote = styled.p`
	display: block;
	margin-top: 5px;
	font-size: 12px;
	text-align: center;
	font-style: italic;
	color: #999999;
`;
