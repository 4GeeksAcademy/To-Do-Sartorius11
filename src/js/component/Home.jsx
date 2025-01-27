import React from "react";
import { ToDoList } from "./TodoList";
import { Annie } from '../component/Annie';


//create your first component
const Home = () => {
	return (
		<div className="container">
			<ToDoList />
		</div>
	);
};

export default Home;
