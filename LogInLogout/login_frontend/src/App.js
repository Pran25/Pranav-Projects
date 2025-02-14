import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Register/>
        <Routes>
        
          <Route path="/login" element={<Login />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
