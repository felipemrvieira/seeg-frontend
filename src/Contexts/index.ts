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
});
export const SearchProvider = SearchContext.Provider;

export default SearchContext;
