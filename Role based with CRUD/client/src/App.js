import logo from './logo.svg';
import './App.css';
import Signin from './components/signin';
import Signup from './components/signup';
import Student_dash from './components/students_dash';
import Staff_dash from './components/staff_dash';
import Admin_dash from './components/admin_dash';
import Adminupdate from './components/adminupdate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/students_dash' element={<Student_dash/>}/>
      <Route path='/staff_dash' element={<Staff_dash/>}/>
      <Route path='/admin_dash' element={<Admin_dash/>}/>
      <Route path='/update/:id' element={<Adminupdate/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
