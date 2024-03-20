import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NotFoundErrorPage from "./pages/Common/NotFoundError.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/Contact/Contact.tsx";
import AboutPage from "./pages/About/About.tsx";
import HomePage from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
