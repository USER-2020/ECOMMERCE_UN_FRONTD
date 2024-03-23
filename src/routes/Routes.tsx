import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import NavBar from '../components/navbar/NavBar.tsx';
import Footer from '../components/footer/Footer.tsx';
import Login from '../components/auth/Login.tsx';


const AppRouter = () => {
    return (
        <>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prueba" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        <Footer />
        </Router>
        </>
    );
};

export default AppRouter;