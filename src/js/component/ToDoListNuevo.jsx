import React, { useState } from "react";

export const ToDoListNuevo = () => {

    const [tarea, setTarea] = useState('');

    const [lista, setLista] = useState([]);

    const handlerInsertarTarea = (e) => {
        setTarea(e.target.value);
    }

    const handlerLista = () => {
        if (tarea.trim() !== "") {
            setLista([...lista, tarea]);
            setTarea("");
        }
    };

    return (
        <div>
            <div className="container">


                <input className="form-control" list="datalistOptions"
                    id="exampleDataList" placeholder="Type to search..." onChange={handlerInsertarTarea} value={tarea}
                    onKeyDown={(extasis) => {
                        if (extasis.key === "Enter") {
                            {
                                extasis.preventDefault()
                                handlerLista();
                            }
                        };

                    }}
                />

                <ul className="list-group m-1">
                    {lista.length > 0 ? (lista.map((element, index) => (

                        <li className="list-group-item" key={index}>
                            {element}
                        </li>
                    ))
                    ) : (
                        <li className="list-group-item">No hay tareas</li>
                    )
                    }


                    <li className="list-group-item">{lista.length} Tareas</li>
                </ul>





            </div>
        </div>
    );
}