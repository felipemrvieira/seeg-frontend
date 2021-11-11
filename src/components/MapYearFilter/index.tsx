import React, { useState } from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Props } from './interfaces';

import {
	Container,
	CustomSlider,
	SSlider,
	Input,
	Range,
	RangeContainer,
	RangeMarker,
	RangeMarkerContainer,
} from './styles';

const MapYearFilter: React.FC<Props> = ({ activeYear, updateYear }) => {
	const [value, setValue] = useState<number | string | Array<number | string>>(
		activeYear
	);

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value === '' ? '' : Number(event.target.value));
	};

	const handleBlur = () => {
		if (value < 1970) {
			setValue(1970);
		} else if (value > 2020) {
			setValue(2020);
		}
		updateYear(+value);
	};

	return (
		<>
			<Container>
				{/* <p>{rangeValue}</p> */}
				<DateRangeIcon />
				<Input
					value={value}
					size="small"
					onChange={handleInputChange}
					onBlur={handleBlur}
					onMouseOut={handleBlur}
					inputProps={{
						step: 1,
						min: 1970,
						max: 2020,
						type: 'number',
						'aria-labelledby': 'input-slider',
					}}
				/>
				<SSlider
					aria-label="Year"
					value={typeof value === 'number' ? value : 0}
					onChange={handleSliderChange}
					onChangeCommitted={() => updateYear(+value)}
					valueLabelDisplay="auto"
					marks
					step={1}
					min={1970}
					max={2020}
				/>
				{/* <CustomSlider
					valueLabelDisplay="auto"
					aria-label="pretto slider"
					defaultValue={2019}
					marks
					step={1}
					min={1970}
					max={2020}
				/> */}
				{/* <RangeContainer>
				 <Range
						type="range"
						min={minValue}
						max={maxValue}
						value={rangeValue}
						step="1"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setRangeValue(e.target.valueAsNumber);
							updateYear({ defaultYear: e.target.valueAsNumber });
						}}
						onDragEnd={() => {
							console.log('Drag end');
						}}
					/>
					<RangeMarkerContainer>
						{[...Array(steps)].map((e, i) => (
							<RangeMarker key={e}>
								<div />
								<p>{i + minValue}</p>
							</RangeMarker>
						))}
					</RangeMarkerContainer>
				</RangeContainer> */}
			</Container>
		</>
	);
};
export default MapYearFilter;
