import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'

function App() {

  const [darkTheme,setDarkTheme] = useState(true)
  return (
    <div className={ darkTheme ?'dark':''}>
      <div className='bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen max-w-screen'>
        <Navbar
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
