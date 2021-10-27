import styled from 'styled-components';

export const Container = styled.div`
	align-self: end;
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
	background: linear-gradient(90deg, #c8cbcf 0%, #37474f 100%);
`;

export const BoxGradientNote = styled.p`
	display: block;
	margin-top: 5px;
	font-size: 12px;
	text-align: center;
	font-style: italic;
	color: #999999;
`;
