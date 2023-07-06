import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import PricePage from './pages/PricePage';
import HelpPage from './pages/HelpPage'
function App() {
    return <div className='App'>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='pricing' element={<PricePage />} />
                        <Route path='help' element={<HelpPage />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
