export interface Sector {
	id: number;
	name: string;
	slug: string;
}

export interface Gas {
	id: number;
	name: string;
	slug: string;
}

export interface ActiveSector {
	slug: string;
}

export interface MapInfo {
	activeSector: ActiveSector;
	activeYear: number;
	activeGas: number;
	sectors: Sector[];
	gases: Gas[];
}
