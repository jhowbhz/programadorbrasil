import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = (): JSX.Element => {
	return <div className="container">
		<Outlet />
	</div>;
}

export default App;
