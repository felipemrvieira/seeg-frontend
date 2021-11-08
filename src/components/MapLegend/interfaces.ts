/* eslint-disable camelcase */
export interface ActiveSector {
	slug: string;
}
export interface MapInfo {
	activeSector: ActiveSector;
	activeYear: number;
	activeGas: number;
}
export interface IMapLegend {
	allocated_in_country: string;
	biggest_state_emission: string;
	non_allocated: string;
}
