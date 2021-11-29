import React from 'react';

const SearchContext = React.createContext({
	slug: '',
	year: 2020,
	gasUsed: {
		id: '',
		name: '',
		slug: '',
	},
});
export const SearchProvider = SearchContext.Provider;

export default SearchContext;
