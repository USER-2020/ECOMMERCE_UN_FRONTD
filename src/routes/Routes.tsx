import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Login from '../components/auth/Login.tsx';
import MediaControlCard from '../components/productsDetails/card.tsx';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prueba" element={<MediaControlCard />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>

    );
};

export default AppRouter;