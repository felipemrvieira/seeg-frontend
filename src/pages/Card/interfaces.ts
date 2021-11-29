/* eslint-disable camelcase */
export interface TerritoryInfoInterface {
	area: number | null | undefined;
	total_population: number | null | undefined;
	urban_population: number | null | undefined;
	rank: number | null | undefined;
	total_allocated: number | null | undefined;
	name: string | null | undefined;
	flag_url: string | null | undefined;
	id: number;
	slug: string;
}
export interface ParamsTypes {
	slug: string;
}
export interface QueryTypes {
	year: number | string;
}

export interface BrazilInfoInterface {
	total_allocated: number | null | undefined;
}

export interface GasInterface {
	name: string;
	id: number;
	slug: string;
}
