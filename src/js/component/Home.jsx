import React from "react";
import { ToDoList } from "./TodoList";



//create your first component
const Home = () => {
	return (
		<div className="container">
			<ToDoList />
		</div>
	);
};

export default Home;
