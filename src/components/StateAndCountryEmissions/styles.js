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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.chart {
			flex: 1;
		}
	}
`;
