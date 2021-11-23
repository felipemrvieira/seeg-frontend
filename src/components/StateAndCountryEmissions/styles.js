import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: white;
	justify-content: space-between;
	padding: 40px 22px;
	.header {
		margin-bottom: 18px;
		color: #454e50;
		text-transform: uppercase;
		h2 {
			font-weight: 700;
		}
		p {
		}
	}
	.chartWrapper {
		display: inline-flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 12px;
		.chart {
			flex: 1;
			/* margin: 0 12px; */
			max-width: 50%;
			.chartHeader {
				padding: 0.9375em 0;
				margin-bottom: 0;
				text-align: center;
				font-size: 1em;
				font-weight: 400;
				text-transform: uppercase;
				color: #444;
				background: #ecf0f0;
			}
		}
	}
`;
