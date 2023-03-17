import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Login from './componets/Login';
import Register from './componets/Register';
import Posts from './componets/Posts';
import Protected from './Protect';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
       <Route element={<Protected/>}>
       <Route path='/posts' element={<Posts/>}/>
       </Route>
     
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
