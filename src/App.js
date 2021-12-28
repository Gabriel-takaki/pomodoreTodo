import './App.css';
import TodoList from './components/TodoList';
import Pomodore from './components/Pomodore';

function App() {
  return (
    <div className='todo-app'>
      <Pomodore />

      <TodoList />
    </div>
  );
}

export default App;