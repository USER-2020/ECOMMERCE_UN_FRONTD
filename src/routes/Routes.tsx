import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Card from '../components/productsDetails/Card.tsx';
import NavBar from '../components/navbar/NavBar.tsx';


const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prueba" element={<Home />} />
                    <Route path="/detailproducts" element={<Card />} />
                </Routes>
            </Router>
        </>

    );
};

export default AppRouter;