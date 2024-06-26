import ucomLogo from '../../assets/logo/UCOM-FONDO-TRANSPARENTE.png';
import Strip from '../strip/strip';
import '../../styles/navbar-styles.css';

export default function NavBar() {
  return (
    <>
      <Strip />
      <div className='containerNavbar'>
        <nav className='navbar'>
          <div className="menuBurguer">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="allContainer">
            <div className="imgContainer">
              <img src={ucomLogo} style={{ height: "60px" }} alt="logo" />
            </div>
            <div className='searchContainer'>
              <div className='inputWrapper'>
                <input type='text' className='inputSearch' placeholder="Productos y mas..." />
                <i className="fas fa-search input-icon"></i>
              </div>
            </div>
            <div className='optionsContainer'>
              <i className="fa-regular fa-user"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
