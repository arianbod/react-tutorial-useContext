import React, { createContext, useState } from 'react';

const GlobalContext = createContext();
const AppContext = () => {
	const [nameState, setNameState] = useState('Peter');
	return (
		<GlobalContext.Provider
			value={{ nameState, setNameState }}></GlobalContext.Provider>
	);
};
export default AppContext;
