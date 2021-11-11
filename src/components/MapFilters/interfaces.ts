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
	activeGas: number;
	sectors: Sector[];
	gases: Gas[];
	isCity: boolean;
	updateTerritoryType: (type: boolean) => void;
}
