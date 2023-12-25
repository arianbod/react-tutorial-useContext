import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
	const [nameState, setNameState] = useState('Peter');
	console.log(nameState);
	return (
		<GlobalContext.Provider value={{ nameState, setNameState }}>
			{children}
		</GlobalContext.Provider>
	);
};
export default AppContext;
