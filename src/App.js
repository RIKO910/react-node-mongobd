import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
