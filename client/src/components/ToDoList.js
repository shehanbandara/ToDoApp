import { useEffect, useState } from 'react';

const APIBASE = 'http://localhost:3001';

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
		GetToDoList();
	}, []);

    const GetToDoList = () => {
        fetch(APIBASE + '/todolist')
			.then(res => res.json())
			.then(data => setToDoList(data))
			.catch((err) => console.error("Error: ", err));
	}

    const DeleteToDo = async id => {
		const data = await fetch(APIBASE + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json());
		setToDoList(toDoList => toDoList.filter(todo => todo._id !== data._id));
	}

    const CompleteToDo = async id => {
        const data = await fetch(APIBASE + '/todo/update/' + id, { method: "PUT" }).then(res => res.json());
        setToDoList(toDoList => toDoList.map(todo => {
            if (todo._id === data._id) {
                todo.complete = data.complete;
            }
            return todo;
        }));
	}

    return (
        <>
            <div className="ToDoList">
                {toDoList.length > 0 ? toDoList.map(todo => (
                    <div className={"todo " + (todo.complete ? "is-complete" : "")} key={todo._id}>
                        <div className="box"></div>
                        <div className="text" onClick={() => CompleteToDo(todo._id)}>{ todo.text }</div>
                        <div className="delete" onClick={() => DeleteToDo(todo._id)}>X</div>
                    </div>
                )) : (
                    <p>Your To-Do List Is Empty! 🥳</p>
                )}
            </div>
        </>
    );
}

export default ToDoList;