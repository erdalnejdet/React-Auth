import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../firebase';

function Header() {

  const [isLoggedIn,setisLoggedIn ] = useState(false);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setisLoggedIn(true);
      }
      else{
        setisLoggedIn(false);
      }
    });

    return () => unsubscribe();
  },[])

  const LogoutFunc =  async ()=>{
    toast.success('Cıkış Yapılıyor.')

    await signOut(auth)
    setTimeout(()=>{
      window.location= "/"
    }, 500);
  }
  return (
    <div className='navbar'>
    <div className="navbar-left">
        Firebase
    </div>

   {isLoggedIn &&(
   <div onClick={LogoutFunc} className="navbar-right">
   Logout
</div>
   )}
 
    </div>
  )
}

export default Header