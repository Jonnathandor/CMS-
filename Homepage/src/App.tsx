import './styles.css'
import IMAGE from './water.png'
import { ClickCounter } from './ClickCounter'
export const App = () => {
    const name = "jonnathan"
  return (
    <div>
      <h1>This is my boiler plate :)!!!!</h1> {process.env.name}
      <img src={IMAGE} alt="water" />
      <ClickCounter />
    </div>
  )
}
