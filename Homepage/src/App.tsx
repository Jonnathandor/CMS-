import { NavBar, Profile, ProjectList, ContactForm, Footer } from './components'
import './App.css'
export const App = () => {

  return (
    <div className="app">
      <NavBar/>
      <Profile/>
      <ProjectList/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
