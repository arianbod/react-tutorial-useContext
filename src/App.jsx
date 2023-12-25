import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useGlobalContext } from './Context';

function App() {
	const [count, setCount] = useState(0);
	const { nameState, setNameState } = useGlobalContext();
	setNameState('Jason');
	console.log(nameState);
	return <>{nameState}</>;
}

export default App;
