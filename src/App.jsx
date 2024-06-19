import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {

  const [users,setUsers] = useState(null);

  useEffect(()=>{

    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUsers(user)
      } else {
        // User is signed out
        // ...
      }
    });
  },[])
  return (
    <div>
  
        <Header />
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='dashboard' element={<Home users={users} />} />
        </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </div>
  );
}

export default App;
