export interface SectorSelectItem {
	value: number;
	name: string;
}

export interface GasSelectItem {
	value: number;
	name: string;
}
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
export interface MapInfo {
	activeSector: Sector;
	activeGas: Gas;
	sectors: Sector[];
	gases: Gas[];
	isCity: boolean;
	updateTerritoryType: (type: boolean) => void;
	updateDefaultSector: (type: number) => void;
	updateDefaultGas: (type: number) => void;
}
