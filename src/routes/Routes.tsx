import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prueba" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;