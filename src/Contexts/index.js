import React from 'react';

const SearchContext = React.createContext({ slug: '', year: 2020 });
export const SearchProvider = SearchContext.Provider;

export default SearchContext;
