import {Routes, Route, Navigate} from 'react-router-dom';
import React, {useState} from 'react';

import Menu from './components/Menu';


import Nav from '../src/components/Navbar';


import Users from "./pages/Users/index.jsx";
import Settings from "./pages/Settings/index.jsx";
import Receive from "./pages/Recieve/Recieve.jsx";
import Statistic from "./pages/Statistic/index.jsx";
import History from "./pages/History/index.jsx";
import Login from "./pages/Login";
import { context } from './context/context';
import Private from "./Private/index.jsx";


function App() {

    const [isAuth, setIsAuth] = useState(false);

    if (!isAuth) {
        return (
            <Routes>
                <Route path='/login' element={<Login {...{setIsAuth}} />}/>
                <Route path='/' element={<Navigate to='/login'/>}/>
            </Routes>
        );

    }
        return (
        <>
            <div className='context'>
                <Menu  {...{ setIsAuth }} />
                <main>
                    <Nav/>
                    <context.Provider value={''}>
                        <Routes>
                            <Route path='/' element={<Private/>}>

                                <Route path='/' element={<History/>}/>
                                <Route path='/users' element={<Users/>}/>

                                <Route path='/settings' element={<Settings/>}/>

                                <Route path='/receive' element={<Receive/>}/>

                                <Route path='/welles' element={<Statistic/>}/>
                            </Route>
                        </Routes>
                    </context.Provider>
                </main>
            </div>
        </>
    );
}

export default App;
