import { NavBar, Profile, ProjectList, ContactForm } from './components'
import './App.css'
export const App = () => {

  return (
    <div className="app">
      <NavBar/>
      <Profile/>
      <ProjectList/>
      <ContactForm/>
    </div>
  )
}
