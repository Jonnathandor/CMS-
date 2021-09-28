import React, { useState, useEffect } from 'react';
import { NavBar, Profile, ProjectList, ContactForm, Footer, LoginModal } from './components';
import './App.css';
import { IUser } from './interfaces';

export const App = () => {
  const [user, setUser] = useState<IUser>({ email: "", password: "", isLoggedIn: false});
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user])

  const openSignInModal = ():void => {
    setOpenSignIn(true);
  }

  const signIn = async (e: React.MouseEvent<HTMLElement>, isOpen: boolean, email: string, password: string):void => {
    e.preventDefault();
    // We only want to set the user If we have succesful authentication.
    console.log(email, password)
    await setUser({ email: email, password:password, isLoggedIn:true})
    setOpenSignIn(isOpen);
    console.warn(user);
  } 

  const closeModal = (isOpen: boolean):void => {
    setOpenSignIn(!isOpen);
  }

  return (
    <div className="app">
      <LoginModal
      openSignIn={openSignIn}
      signIn={signIn}
      closeModal={closeModal}/>
      <NavBar
      user={user}
      openSignInModal={openSignInModal}
      />
      <Profile/>
      <ProjectList/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
