import "./App.css";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import NotFoundErrorPage from "./pages/Common/NotFoundError";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
    errorElement: <NotFoundErrorPage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
    errorElement: <NotFoundErrorPage />, 
	},
	{
		path: "/contact",
		element: <ContactPage />,
    errorElement: <NotFoundErrorPage />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={appRouter} />
		</>
	);
}

export default App;
