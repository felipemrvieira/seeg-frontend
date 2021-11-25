/* eslint-disable camelcase */
export interface CardHeaderProps {
	year: number;
	area?: number | null | undefined;
	total_population?: number | null | undefined;
	urban_population?: number | null | undefined;
	rank?: number | null | undefined;
	total_allocated?: number | null | undefined;
	allocatedEmissionInCountry?: number | null | undefined;
	notAllocatedPercentage?: number | null | undefined;
}
