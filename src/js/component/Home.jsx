import React from "react";
// import { ToDoListNuevo } from "./ToDoListNuevo.jsx";
// import { ToDoList } from "./TodoList";
import { Web } from "./Web";
import { Form } from "./Form";

//create your first component
const Home = () => {
	return (
		<div className="container">
			{/* text-center my-5 */}
			{/* <ToDoList /> */}
			{/* <h1>ToDoList</h1> */}
			{/* <ToDoListNuevo /> */}
			<Web />
			<Form />
		</div>
	);
};

export default Home;
