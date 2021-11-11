export interface ActiveSector {
	slug: string;
	id: number;
}

export interface MapInfo {
	activeSector: ActiveSector;
	activeYear: number;
	activeGas: number;
	isCity: boolean;
}
