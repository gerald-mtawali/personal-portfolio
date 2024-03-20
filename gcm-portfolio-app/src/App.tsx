import "./App.css";
import NavigationHeader from "./components/Header/NavHeader";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<NavigationHeader />
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}

export default App;
