import React from 'react';

const SearchContext = React.createContext({
	slug: '',
	year: 2020,
	isCity: false,
	gasUsed: {
		id: 0,
		name: '',
		slug: '',
	},
	territory: {
		id: 0,
		slug: '',
	},
	totalAllocated: 0,
	allocatedEmissionInCountry: 0,
	defaultTerritory: 0,
	area: 0,
	totalPopulation: 0,
	defaultEmissionType: '',
});
export const SearchProvider = SearchContext.Provider;

export default SearchContext;
