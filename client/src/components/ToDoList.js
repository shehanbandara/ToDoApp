import { useEffect, useState } from 'react';

const APIBASE = 'http://localhost:3001';

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newToDo, setNewToDo] = useState("");

    useEffect(() => {
		GetToDoList();
        console.log(toDoList);
	}, []);

    const GetToDoList = () => {
        fetch(APIBASE + '/todolist')
			.then(res => res.json())
			.then(data => setToDoList(data))
			.catch((err) => console.error("Error: ", err));
	}

    return (
        <>
            <div className="ToDoList">
                {toDoList.map(todo => (
                    <div className="todo" key={todo._id}>
                        <div className="box"></div>
                        <div className="text">{ todo.text }</div>
                        <div className="delete">x</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ToDoList;