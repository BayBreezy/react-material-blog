import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//Providers
import { BlogContextProvider } from "./contexts/BlogContext";

//Comps
import Header from "./components/Header";

//Pages
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import NewBlog from "./pages/NewBlog";
import EditBlog from "./pages/EditBlog";

function App() {
	useEffect(() => {
		toast("Welcome to my blog!", {
			icon: "🚀",
		});
	}, []);
	return (
		<>
			<BlogContextProvider>
				<ToastContainer
					position="top-right"
					autoClose={6000}
					pauseOnHover
					pauseOnFocusLoss
				/>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/new" element={<NewBlog />} />
					<Route path="/:id" element={<BlogPage />} />
					<Route path="/edit/:id" element={<EditBlog />} />
				</Routes>
			</BlogContextProvider>
		</>
	);
}

export default App;
