import styled from 'styled-components';
import { Popup } from 'react-leaflet';

export const StyledPop = styled(Popup)`
	.leaflet-popup-content-wrapper {
		min-width: 300px;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		.popUpHeader {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img {
				width: 36px;
			}
			span {
				display: inline-block;
				margin-left: 8px;
				vertical-align: top;
				font-size: 1.75em;
				color: #333;
				font-weight: bold;
			}
		}
		.popUpTerritoryInfo {
			display: flex;
			justify-content: space-between;
			margin-top: 12px;
			margin-bottom: 12px;
			.info {
				text-align: center;
				.label {
					font-size: 13px;
					color: gray;
				}
				.value {
					display: block;
					margin: 0;
					font-size: 13px;
					font-weight: bold;
					color: #222;
				}
			}
		}
	}
	.popUpEmissionInfo {
		text-align: center;
		.label {
			font-size: 13px;
			color: gray;
		}
		.value {
			display: block;
			margin: 0;
			font-size: 1.5em;
			font-weight: bold;
			color: #222;
		}
	}
	.popUpGraphic {
		text-align: center;
		margin-top: 12px;
	}
	.popUpButton {
		margin-top: 12px;
		a {
			display: block;
			font-size: 14px;
			font-weight: 700;
			color: #fff;
			background: #f17506;
			border: 1px solid #f17506;
			padding: 0 1.25em;
			line-height: 2.1875em;
			border-radius: 1.25em;
			text-align: center;
			text-decoration: none;
			outline: none;
			transition: all 200ms;
			font-family: 'Lato', sans-serif;
			align-items: center;
			justify-content: center;
			:hover {
				color: #f17506;
				background: #fff;
			}
		}
	}
`;
