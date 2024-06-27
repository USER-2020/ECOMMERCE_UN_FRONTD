import ucomLogo from '../../assets/logo/UCOM-FONDO-TRANSPARENTE.png';
import Strip from '../strip/strip';
import '../../styles/navbar-styles.css';
import { useRef, useState } from 'react';

export default function NavBar() {

  const modalCategorias = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);


  const toggleCategorias = () => {
    setExpanded(!expanded);
  };


  return (
    <>
      <Strip />
      <div className='containerNavbar'>
        <nav className='navbar'>
          <div className="menuBurguer" onClick={toggleCategorias}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="allContainer">
            <div className="imgContainer">
              <a href="/">
                <img src={ucomLogo} style={{ height: "60px" }} alt="logo" />
              </a>
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
        {/* div de allCategorias deplegable */}
        <div className={`allCategoriasContainer ${expanded ? 'expanded' : ''}`} ref={modalCategorias}>
          <div className="categorias">
            Categorias
          </div>
          <div className="subcategorias">
            Subcategorias
          </div>
          <div className="prodCatVisuales">
            Productos visuales
          </div>
        </div>
      </div>
    </>
  );
}
