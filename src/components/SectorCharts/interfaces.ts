export interface SectorLevelsState {
	level_position: number;
	levels: Level[];
	key: any;
}

// export type SectorLevelsState = Array<SectorLevel>;

export interface Level {
	id: number;
	name: string;
	slug: string;
}
