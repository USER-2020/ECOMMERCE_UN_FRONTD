import './App.css'
import AppRouter from './routes/Routes';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>

      <NavBar />
      <AppRouter />
      <Footer />

    </>
  );
}

export default App;

