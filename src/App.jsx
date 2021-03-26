import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import "";

import TodoList from "./components/TodoList";
import StoargeService from "./components/StorageServices";

const App = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const data = StoargeService.load();
        setLists([...data]);
    }, []);

    function addList() {
        lists.push({
            id: nanoid(),
            title: "Nouvelle liste …",
            tasks: [],
        });
        setLists([...lists]);
    }

    function onRemove(information) {
        let pos = lists.findIndex((list) => list.id === information.id);
        console.log(pos);
        if (pos > -1) {
            lists.splice(pos, 1);
            setLists([...lists]);
            StoargeService.save(lists);
        }
    }

    function saveList(updatedTodolist) {
        let pos = lists.findIndex((list) => list.id === updatedTodolist.id);
        if (pos > -1) {
            lists.splice(pos, 1, updatedTodolist);
            setLists([...lists]);
            StoargeService.save(lists);
        }
    }

    return (
        <>
            <h1 class="title">GINTODOLIST</h1>
            <button onClick={addList}>➕ Ajouter une nouvelle liste</button>
            <div class="listItem">
                {lists.map((todolist) => (
                    <TodoList key={todolist.id} onRemove={onRemove} todolist={todolist} onChange={saveList} />
                ))}
            </div>
        </>
    );
};

export default App;
