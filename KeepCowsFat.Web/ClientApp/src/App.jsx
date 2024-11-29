import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import BackStory from './Pages/BackStory';
import About from './Pages/About';
import Services from './Pages/Services';
import Plaque from './Pages/Plaque';
import Contact from './Pages/Contact';
import ContextComponent from './TotalContext';
import Slave from './Pages/Slave';
import Sources from './Pages/Sources';
const App = () => {
    return (
        <ContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/backstory' element={<BackStory />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/PTPF/NMTDPL/952377' element={<Plaque />} />
                    <Route path='/PTPF/NMTDSL/952724' element={<Slave />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/sources' element={<Sources />} />
                </Routes>
            </Layout>
        </ContextComponent>
    );
}

export default App;