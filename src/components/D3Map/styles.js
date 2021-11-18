import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: #ecf0f0;
	/* min-height: 75vh; */
	justify-content: space-between;
	padding: 40px 22px;
	background-color: #dc7777;
	.header {
		max-width: 480px;

		h2 {
			text-transform: uppercase;
			font-weight: 300;
			font-size: 36px;
			color: white;
			font-family: 'Lato', sans-serif;
			display: inline-block;
		}
		span {
			display: inline-block;
			font-weight: 700;
		}
	}
`;
