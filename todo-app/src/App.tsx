import { useState } from 'react'
import './App.css'
import { Todo } from './type';
import { Header } from './components/Header/Header';
import { TodoKeeper } from './components/TodoKeeper/TodoKeeper';
import { TodoList } from './components/TodoList/TodoList';

// saraksts, kas būs sākotnēji iedots
const DEFAULT_TODO_LIST = [
  {id: 1, name: 'Call Someone To Tell Them You Can’t Talk Right Now', description:'This funny bucket list idea will leave them confused for a good while. Even better if you call someone you’re actually feeling like talking to – you never know if they’ll get confused enough to call you back.', checked: true},
  {id: 2, name: 'Go Up To Strangers And Act Like Lifelong Friends', description:'Maybe they’ll think you’ve completely lost it, but in a rare and beautiful scenario you just may make some new friends. In either case you’ll have a lot of fun confusing people.', checked: false},
  {id: 3, name: 'Jump Into A Taxi, Then Shout “Follow That Car!', description:'This one is best played if you have not determined in advance which car you’re talking about. Just point in a random direction, and if the taxi driver asks which car, on the spot choose one..', checked: false},

]

function App() {
  console.log(DEFAULT_TODO_LIST);

  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  // lai pievienotu jaunu uzdevumu
  const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
    // katram jaunam elementam id tiks piešķirts unikals - atškirīgs no citiem;
    setTodos([...todos, {id: (todos[todos.length - 1].id + 1), description, name, checked: false}])
  }

  // funkcija, lai izdzēstu uzdevumu
  const deleteTodo =(id: Todo['id']) => {
    // filtrējam cauri visam masīvam, ja ir sakritība
    setTodos(todos.filter((todo) => todo.id !== id ));
  }
  // lai nomainitu statusu (checked/unchecked)
  const checkTodo = (id: Todo['id']) => {
    // ejam cauti visam masivam ar map funkciju, 
    setTodos(todos.map((todo) => {
      // meklājam tā objekta id, kuram id sakrīt ar uzklikšķināta ID
      if (todo.id === id) {
        // ja ID sakrīt, tad mainam vērtību uz pretējo
        return { ...todo, checked: !todo.checked};
      }
      // ja ID nesakrīt, tad atgriežam neizmainītu objektu
      return todo;
      })
    );
  };
  
    // izveido virsrakstu
    // izveido ievades formu ar pievienošanas pogu
    // izveido uzdevumu sarakstu 
    return (
      <div className='app_container'>
        <div className='container'>
          <Header todoCount={(todos.length)}/>
          <TodoKeeper addTodo={addTodo}/>
          <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        </div>
      </div>
    )
}

export default App
