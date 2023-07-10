import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Nav from '../src/components/Navbar';
import Buyurtma from './pages/Buyurtma';
import Costumer from './pages/Costumer';
import Toifa from './pages/Toifa';
import Mahsulot from './pages/Mahsulot';
import Texnolologiya from './pages/Texnologiya';
import Manzil from './pages/Manzil';
import Private from './Private/index.jsx';

import Login from "./pages/Login"

// import Login from './pages/Login';
// import Home  from './pages/Home/Home';
// const isLoggedIn = localStorage.getItem("setToken");

// const [authe, setAuthe] = useState("")

function App() {
  const { isAuthenticated, isFatched } = useAuth();

  if (!isAuthenticated) {
    return ( 
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    )
  }

  return (
    <>
     
      <div className='context'>
        <Menu />
        <main >
          <Nav />
          <Routes>
            <Route path='/' element={<Private />}>
              <Route path='/' element={<Buyurtma />} />
              <Route path='/costumer' element={<Costumer />} />
              <Route path='/toifa' element={<Toifa />} />
              <Route path='/mahsulot' element={<Mahsulot />} />
              <Route path='/texnolologiya' element={<Texnolologiya />} />
              <Route path='/manzil' element={<Manzil />} />
            </Route>
            <Route path='/login' element={  <Login/>}/>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
