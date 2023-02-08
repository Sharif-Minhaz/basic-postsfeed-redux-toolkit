import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import { fetchPosts } from "./features/posts/postSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
