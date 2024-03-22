import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import NavBar from '../components/navbar/NavBar.tsx';
import MediaControlCard from '../components/productsDetails/card.tsx';


const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prueba" element={<Home />} />
                    <Route path="/detailproducts" element={<MediaControlCard />} />
                </Routes>
            </Router>
        </>

    );
};

export default AppRouter;