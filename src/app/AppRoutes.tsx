import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";

const AppRoutes = (): JSX.Element => {
	return <BrowserRouter>
		<Routes>
			<Route element={<App />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>;
}

export default AppRoutes;
