import './App.css'
import { FaGithubSquare } from "react-icons/fa";
import Linkedin from './components/Linkedin';


function App() {
 

  return (
    <div className='container-app'>
      <h1>Meus Links</h1>

      <a href="https://github.com/dourado840" className='links' target='_blanck'><FaGithubSquare />Github</a>
      <Linkedin />

    </div>
  )
}

export default App
