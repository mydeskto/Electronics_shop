import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Admin from './pages/Admin'
import {Toaster} from 'react-hot-toast'
function App() {
  

  return (
    <main className='bg-primary text-tertiary'>
      <Navbar/>
      <Admin />
      <Toaster
      
      />
    </main>
  )
}

export default App
