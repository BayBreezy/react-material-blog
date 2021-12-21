import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const BlogContext = createContext();

export const useBlogs = () => useContext(BlogContext);

export const BlogContextProvider = ({ children }) => {
	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: "How To Cook",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnamdolorem saepe laborum soluta repellendus esse.",
		},
		{
			id: 2,
			title: "Supermarket Is Not Fun",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnamdolorem saepe laborum soluta repellendus esse.",
		},
		{
			id: 3,
			title: "Get Up Early",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnamdolorem saepe laborum soluta repellendus esse.",
		},
		{
			id: 4,
			title: "Meditate",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnamdolorem saepe laborum soluta repellendus esse.",
		},
	]);

	const getSingleBlog = (id) => {
		return blogs.filter((f) => f.id == id)[0];
	};

	const createBlog = (title, body) => {
		if (!title || !body) return toast.error("Blog title and body is required.");
		let newBlog = {
			id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
			title,
			body,
		};
		setBlogs([...blogs, newBlog]);
		toast("Blog added successfully!", { icon: "🥳" });
	};

	const updateBlog = (title, body, id) => {
		if (!title || !body) return toast.error("Blog title and body is required.");

		let currBlog = blogs.find((b) => b.id == id);
		let blogIndx = blogs.findIndex((b) => b.id == id);
		if (!currBlog || blogIndx == -1)
			return toast.error("Blog could not be found");

		currBlog.title = title;
		currBlog.body = body;
		let newList = [...blogs];
		newList.splice(blogIndx, 1, currBlog);

		setBlogs(newList);
		toast("Blog updated successfully!", { icon: "🥳" });
	};

	const removeBlog = (id) => {
		let newList = blogs.filter((b) => b.id != id);
		setBlogs(newList);
		toast("Blog remove successfully!", { icon: "👍" });
	};
	const blogValues = {
		blogs,
		getSingleBlog,
		createBlog,
		removeBlog,
		updateBlog,
	};
	return (
		<BlogContext.Provider value={blogValues}>{children}</BlogContext.Provider>
	);
};
