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
      </div>

      <div className='Footer'>
          <Footer/>
      </div>
</div>
  );
}

export default App;

