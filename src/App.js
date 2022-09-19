import './App.css';
import TodoList from './components/TodoList/TodoList';
import {useSelector , useDispatch} from 'react-redux'
import AddTodo from './components/AddTodo/AddTodo';
import {filterTodo} from './redux/actions/TodoAction'

function App() {

  const todos = useSelector(state=>state.TodoReducers.todos)
  const todoFiltred = useSelector(state=> state.TodoReducers.filter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="App-header">
        <AddTodo></AddTodo>
        <div style={{display:"flex" , flexDirection : "row"}}>
          <button onClick={()=>dispatch(filterTodo('All'))} > All </button>
          <button onClick={()=>dispatch(filterTodo(true))} > Done </button>
          <button onClick={()=>dispatch(filterTodo(false))} > UnDone </button>
        </div>
        <TodoList todos={ todoFiltred ===  'All' ? todos : todos.filter(el => el.isDone === todoFiltred )}/>
      </div>
    </div>
  );
}

export default App;
