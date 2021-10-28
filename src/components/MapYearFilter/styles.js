import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: white;
	padding: 18px 10px 0px 10px;
`;

export const RangeContainer = styled.div`
	position: relative;
`;
export const RangeMarkerContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 18px;
`;
export const RangeMarker = styled.div`
	position: relative;
	user-select: none;
	height: 60px;
	div {
		border-radius: 50%;
		width: 5px;
		height: 5px;
		background: #fa953a;
	}
	p {
		margin-top: 10px;
		position: absolute;
		font-size: 13px;
		transform: rotate(-60deg);
		right: 0;
	}
`;

export const Range = styled.input`
	position: absolute;
	width: 100%;
	padding: 0 10px;
	-webkit-appearance: none;
	width: 100%;
	height: 0px;
	border-radius: 5px;
	background: #d3d3d3;
	outline: none;
	/* opacity: 0.7; */
	/* -webkit-transition: 0.2s;
	transition: opacity 0.2s;
	&:hover {
		opacity: 1;
	} */
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #fa953a;
		cursor: ew-resize;
		transition: all ease-in-out 0.05s;
	}
	&::-moz-range-thumb {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #fa953a;
		cursor: ew-resize;
		transition: all ease-in-out 0.05s;
	}
`;
