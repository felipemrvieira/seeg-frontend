export interface EmissionType {
	name: string;
	slug: string;
}
export interface Gas {
	id: number;
	name: string;
	slug: string;
}
export interface Sector {
	id: number;
	name: string;
	slug: string;
}
export interface State {
	id: number;
	name: string;
	slug: string;
}
export interface MapInfoInterface {
	activeLevel: number;
	allSectorsColor: string;
	defaultEmissionType: string;
	defaultGas: number;
	defaultSector: number;
	sectors: Sector[];
	emissionsTypes: EmissionType[];
	gases: Gas[];
	states: State[];
}
