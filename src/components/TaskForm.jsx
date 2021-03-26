import React from "react";
import { useRef } from "react";

const TaskForm = (props) => {
    const input = useRef();

    function onFormSubmit(event) {
        event.preventDefault(); //empeche le chargemebt de la page

        let newTaskTitle = input.current.value.trim(); // creer la variable permettant de recuperer les donnée dans l'input

        if (newTaskTitle === "") return; //trim permet de delete les espaces

        //creation de l'evenment
        props.onAddTask(newTaskTitle);

        input.current.value = "";
    }

    return (
        <form action="#" onSubmit={onFormSubmit}>
            <input type="text" placeholder="nouvelle tache" ref={input} />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TaskForm;
