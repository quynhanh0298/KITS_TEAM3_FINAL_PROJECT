import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseDetail from 'pages/CourseDetails';
function App() {
    return <div className='App'>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='coursedetails' element={<CourseDetail />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
