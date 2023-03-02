import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import Number from './components/Number';
import Users from './components/Users';
import store from './redux/store';

function App() {
  return (
    <Provider store={store} >
        <div className="App">
        <Counter/>
        <Number />
        <Users />

        </div>
    </Provider>
  );
}

export default App;
