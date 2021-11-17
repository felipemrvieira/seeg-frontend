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
		.mainBoxContainer {
			flex: 1;
			.mainBox {
				background: #f9fafa;
				margin-right: 18px;
				.info {
					padding: 6px 20px;
					display: flex;
					flex-direction: row;
					+ .info {
						border-top: 1px solid #ccc;
					}
					span {
						line-height: 40px;
						font-size: 0.875em;
						font-weight: 300;
						color: #1e2229;
						text-transform: uppercase;
						margin-right: 4px;
					}
					p {
						line-height: 40px;
						font-size: 0.875em;
						font-weight: 300;
						color: #1e2229;
						text-transform: uppercase;
						font-weight: 700;
					}
				}
			}
		}
		.subBoxesContainer {
			flex: 2;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			p {
				font-size: 14px;
				text-align: center;
				color: #444;
				font-family: 'Lato', sans-serif;
			}
			.content {
				display: flex;
				flex: 1;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 18px;
			}
			.subBox {
				flex: 1;
				display: flex;
				flex-direction: column;
				text-align: center;
				+ .subBox {
					margin-left: 18px;
				}
				.label {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					font-size: 0.875em;
					color: #00a9e2;
					background: #fff;
				}
				.value {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					font-size: 1em;
					font-weight: bold;
					color: #1e2229;
					background: #f9fafa;
				}
			}
		}
	}
`;
