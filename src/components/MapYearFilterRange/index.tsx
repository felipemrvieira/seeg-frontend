import React, { useState } from 'react';

import { Props } from './interfaces';

import { Container, SSlider } from './styles';

const MapYearFilterRange: React.FC<Props> = ({ activeYear, updateYear }) => {
	const [value, setValue] = useState<Array<number | string>>(activeYear);

	const handleSliderChange = (event: Event, newValue: number[]) => {
		setValue(newValue);
	};

	// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setValue(event.target.value === '' ? '' : Number(event.target.value));
	// };

	// const handleBlur = () => {
	// 	if (value < 1970) {
	// 		setValue(1970);
	// 	} else if (value > 2020) {
	// 		setValue(2020);
	// 	}
	// 	updateYear(+value);
	// };

	return (
		<>
			<Container>
				<>
					<SSlider
						aria-label="Year"
						// value={typeof value === 'number' ? value : 0}
						value={value}
						onChange={handleSliderChange}
						// onChangeCommitted={() => updateYear(+value)}
						valueLabelDisplay="on"
						marks
						step={1}
						min={1970}
						max={2020}
					/>
				</>
			</Container>
		</>
	);
};
export default MapYearFilterRange;
