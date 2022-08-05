import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Main Page</h1> */}
        <Router>
          <Routes>
            <Route path='/' exact element={<Login />} /> 
            <Route path='/Register' element={<Register />} />            
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
