import React, { useState } from 'react';

import {
	Container,
	Range,
	RangeContainer,
	RangeMarker,
	RangeMarkerContainer,
} from './styles';

const MapYearFilter: React.FC = () => {
	const [rangeValue, setRangeValue] = useState<number>(2000);
	// const newValue = Number(((Number(rangeValue) - 1970) * 100) / (2019 - 1970));
	// const newPosition = 10 - newValue * 0.2;

	const minValue = 1970;
	const maxValue = 2019;
	const steps = maxValue - minValue + 1;

	return (
		<>
			<Container>
				<p>{rangeValue}</p>
				<RangeContainer>
					<Range
						type="range"
						min={minValue}
						max={maxValue}
						value={rangeValue}
						step="1"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setRangeValue(e.target.valueAsNumber)
						}
					/>
					<RangeMarkerContainer>
						{[...Array(steps)].map((e, i) => (
							<RangeMarker key={e}>
								<div />
								<p>{i + minValue}</p>
							</RangeMarker>
						))}
					</RangeMarkerContainer>
				</RangeContainer>
			</Container>
		</>
	);
};
export default MapYearFilter;
