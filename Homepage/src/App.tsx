import { NavBar, Profile, ProjectList } from './components'
import './App.css'
export const App = () => {

  return (
    <div className="app">
      <NavBar/>
      <Profile/>
      <ProjectList/>
    </div>
  )
}
