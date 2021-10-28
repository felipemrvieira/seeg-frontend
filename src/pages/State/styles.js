import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	width: 100%;
	position: relative;
	/* background: lightblue; */
	justify-content: space-between;
	/* padding: 10px; */
	.leaflet-container {
		width: 100%;
		height: 70vh;
	}
`;
