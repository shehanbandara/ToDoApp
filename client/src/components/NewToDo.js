import { useEffect, useState } from 'react';

const APIBASE = 'http://localhost:3001';

const NewToDo = () => {
    const [toDoList, setToDoList] = useState([]);
    const [popUpActive, setPopUpActive] = useState(false);
    const [newToDo, setNewToDo] = useState("");

    const addToDo = async () => {
		const data = await fetch(APIBASE + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				text: newToDo
			})
		}).then(res => res.json());
		setToDoList([...toDoList, data]);
		setPopUpActive(false);
		setNewToDo("");
	}

    return (
        <>
            <div className="addPopUp" onClick={() => setPopUpActive(true)}>+</div>
            {popUpActive ? (
                <div className="popUp">
					<div className="closePopUp" onClick={() => setPopUpActive(false)}>X</div>
					<div className="content">
						<h3>Add To-Do</h3>
						<input type="text" className="add-todo-input" onChange={e => setNewToDo(e.target.value)} value={newToDo} />
						<div className="button" onClick={addToDo}>Create To-Do</div>
					</div>
				</div>
            ) : ""}
        </>
    );
}

export default NewToDo;