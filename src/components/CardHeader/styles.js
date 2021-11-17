import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	background: #ecf0f0;
	/* min-height: 75vh; */
	justify-content: space-between;
	padding: 32px;
	header {
		width: 100%;
		height: inherit;
		display: flex;
		align-items: center;
		margin-bottom: 30px;

		/* justify-content: center; */
		img {
			max-width: 100px;
			height: inherit;
			margin-right: 15px;
			display: inline-block;
		}
		h1 {
			display: inline-block;

			font-size: 2.5em;
			font-weight: 300;
			color: #1e2229;
			font-family: 'Lato', sans-serif;
			line-height: 1.25;
			margin: 0;
			text-rendering: optimizeLegibility;
		}
	}

	.boxes {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		.mainBox {
			background: red;
			flex: 1;
		}
		.subBoxes {
			background: blue;
			flex: 2;
		}
	}
`;
