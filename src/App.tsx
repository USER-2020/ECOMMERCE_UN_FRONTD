import './App.css'
import AppRouter from './routes/Routes';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className='App'>
          <AppRouter />
      <div className='NavLogin'>
          <NavBar/>
      <div className='Footer'>
          <Footer/>
      </div>
    </div>
</div>
  );
}

export default App;

