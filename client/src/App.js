import Header from './components/Header';
import NewToDo from './components/NewToDo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
      <NewToDo />
    </div>
  );
}

export default App;