import './App.css';
import Firstpage from './components/firstpage';
import Updatedetails from './components/updatedetails';
import Viewdetails from './components/viewdetails';
import Adddetails from './components/adddetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element = {<Firstpage/>} />
   <Route path='/add' element = {<Adddetails/>} />
   <Route path='/view' element = {<Viewdetails/>}/>
   <Route path='/update/:sno' element = {<Updatedetails/>}/>
  

   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
