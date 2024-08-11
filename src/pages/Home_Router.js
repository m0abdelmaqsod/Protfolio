import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home.jsx'
import Navbar from '../components/shared/navbar/Navbar.jsx';
import Footer from '../components/shared/footer/Footer.jsx'
import Sidebar from '../components/shared/sidebar/Sidebar.jsx';



const Home_Router = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Home_Router;