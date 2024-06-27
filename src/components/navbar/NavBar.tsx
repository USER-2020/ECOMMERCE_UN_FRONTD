import ucomLogo from '../../assets/logo/UCOM-FONDO-TRANSPARENTE.png';
import Strip from '../strip/strip';
import '../../styles/navbar-styles.css';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface Subcategoria {
  id: number;
  nombre: string;
  productos: Producto[],
}

interface Categoria {
  id: number;
  nombre: string;
  subcategorias: Subcategoria[];
}

interface Producto {
  nombre: string;
  imagen: string
}
export default function NavBar() {

  const modalCategorias = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [currentCategoria, setCurrentCategoria] = useState<Categoria | null>(null);
  const [navbarResponsive, setNavbarResponsive] = useState(false);





  const toggleCategorias = () => {
    setExpanded(!expanded);
  };


  const handleCategoriaHover = (categoria: Categoria) => {
    setCurrentCategoria(categoria);
  };

  const handleCategoriaClick = (categoria: Categoria) => {
    setCurrentCategoria(categoria);
  };


  const categoriasData: Categoria[] = [
    {
      id: 1,
      nombre: "Electrónica",
      subcategorias: [
        {
          id: 101,
          nombre: "Smartphones",
          productos: [
            { nombre: "iPhone 13", imagen: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg" },
            { nombre: "Samsung Galaxy S21", imagen: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg" },
            { nombre: "Google Pixel 6", imagen: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg" },
            { nombre: "OnePlus 9", imagen: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" },
            { nombre: "Xiaomi Mi 11", imagen: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg" },
            { nombre: "Sony Xperia 5", imagen: "https://images.pexels.com/photos/276965/pexels-photo-276965.jpeg" }
          ]
        },
        {
          id: 102,
          nombre: "Computadoras",
          productos: [
            { nombre: "MacBook Air", imagen: "https://images.pexels.com/photos/18105/pexels-photo.jpg" },
            { nombre: "Dell XPS 13", imagen: "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg" },
            { nombre: "HP Spectre x360", imagen: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg" },
            { nombre: "Asus ZenBook 14", imagen: "https://images.pexels.com/photos/933566/pexels-photo-933566.jpeg" },
            { nombre: "Lenovo ThinkPad X1", imagen: "https://images.pexels.com/photos/457950/pexels-photo-457950.jpeg" },
            { nombre: "Microsoft Surface Laptop 4", imagen: "https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg" }
          ]
        },
        {
          id: 103,
          nombre: "Accesorios",
          productos: [
            { nombre: "Apple AirPods", imagen: "https://images.pexels.com/photos/715688/pexels-photo-715688.jpeg" },
            { nombre: "Samsung Galaxy Buds", imagen: "https://images.pexels.com/photos/1304104/pexels-photo-1304104.jpeg" },
            { nombre: "Logitech Mouse", imagen: "https://images.pexels.com/photos/159856/computer-mouse-equipement-electronics-technology-159856.jpeg" },
            { nombre: "Anker Power Bank", imagen: "https://images.pexels.com/photos/2647936/pexels-photo-2647936.jpeg" },
            { nombre: "Sony WH-1000XM4", imagen: "https://images.pexels.com/photos/4497806/pexels-photo-4497806.jpeg" },
            { nombre: "JBL Flip 5", imagen: "https://images.pexels.com/photos/63703/jbl-audio-music-bluetooth-63703.jpeg" }
          ]
        }
      ]
    },
    {
      id: 2,
      nombre: "Hogar",
      subcategorias: [
        {
          id: 201,
          nombre: "Muebles",
          productos: [
            { nombre: "Sofá Seccional", imagen: "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg" },
            { nombre: "Mesa de Centro", imagen: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg" },
            { nombre: "Silla Reclinable", imagen: "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg" },
            { nombre: "Estantería de Libros", imagen: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg" },
            { nombre: "Mesa de Comedor", imagen: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg" },
            { nombre: "Cama Queen", imagen: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg" }
          ]
        },
        {
          id: 202,
          nombre: "Electrodomésticos",
          productos: [
            { nombre: "Refrigerador", imagen: "https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg" },
            { nombre: "Microondas", imagen: "https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg" },
            { nombre: "Lavavajillas", imagen: "https://images.pexels.com/photos/276723/pexels-photo-276723.jpeg" },
            { nombre: "Lavadora", imagen: "https://images.pexels.com/photos/1432671/pexels-photo-1432671.jpeg" },
            { nombre: "Secadora", imagen: "https://images.pexels.com/photos/1976677/pexels-photo-1976677.jpeg" },
            { nombre: "Aspiradora", imagen: "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg" }
          ]
        },
        {
          id: 203,
          nombre: "Decoración",
          productos: [
            { nombre: "Cuadro Decorativo", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Lámpara de Mesa", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Alfombra Moderna", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Cojines Decorativos", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Espejo de Pared", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Florero de Cristal", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 204,
          nombre: "Jardín",
          productos: [
            { nombre: "Juego de Muebles de Jardín", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Maceta Grande", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Parrilla de Gas", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Sombrilla de Patio", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Cortacésped", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Luces de Jardín", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        }
      ]
    },
    {
      id: 3,
      nombre: "Moda",
      subcategorias: [
        {
          id: 301,
          nombre: "Ropa",
          productos: [
            { nombre: "Camiseta Casual", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Jeans Ajustados", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Vestido de Verano", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Chaqueta de Cuero", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Sudadera con Capucha", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Pantalones de Chándal", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 302,
          nombre: "Calzado",
          productos: [
            { nombre: "Zapatillas Deportivas", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Botas de Cuero", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Sandalias Veraniegas", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Zapatos de Vestir", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Bailarinas Planas", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Mocasines", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 303,
          nombre: "Accesorios",
          productos: [
            { nombre: "Reloj de Pulsera", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Gafas de Sol", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Sombrero de Paja", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Bufanda de Lana", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Guantes de Cuero", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Corbata Elegante", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 304,
          nombre: "Bolsos",
          productos: [
            { nombre: "Bolso de Mano", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Mochila Casual", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Bolso Cruzado", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Bolso de Hombro", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Maletín de Cuero", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Riñonera", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        }
      ]
    },
    {
      id: 4,
      nombre: "Deportes",
      subcategorias: [
        {
          id: 401,
          nombre: "Ropa Deportiva",
          productos: [
            { nombre: "Camiseta Deportiva", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Pantalones Cortos", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Chaqueta de Entrenamiento", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Leggings Deportivos", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Sujetador Deportivo", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Calcetines de Compresión", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 402,
          nombre: "Equipamiento",
          productos: [
            { nombre: "Pesas de Mano", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Esterilla de Yoga", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Bicicleta Estática", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Cuerda de Saltar", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Balón de Baloncesto", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Raqueta de Tenis", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 403,
          nombre: "Calzado Deportivo",
          productos: [
            { nombre: "Zapatillas de Running", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Botas de Fútbol", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Zapatos de Baloncesto", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Zapatillas de Tenis", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Zapatos de Golf", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Sandalias Deportivas", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        }
      ]
    },
    {
      id: 5,
      nombre: "Libros",
      subcategorias: [
        {
          id: 501,
          nombre: "Ficción",
          productos: [
            { nombre: "El Gran Gatsby", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Matar a un Ruiseñor", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "1984", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Orgullo y Prejuicio", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Cien Años de Soledad", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Crimen y Castigo", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 502,
          nombre: "No Ficción",
          productos: [
            { nombre: "Sapiens", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Educada", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "El Poder del Ahora", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Los Secretos de la Mente Millonaria", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Homo Deus", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Piensa y Hazte Rico", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        },
        {
          id: 503,
          nombre: "Infantiles",
          productos: [
            { nombre: "Harry Potter y la Piedra Filosofal", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "El Principito", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Charlie y la Fábrica de Chocolate", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Alicia en el País de las Maravillas", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Donde Viven los Monstruos", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" },
            { nombre: "Matilda", imagen: "https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg" }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = 768;
      if (window.innerWidth <= maxWidth) {
        setNavbarResponsive(true);
      } else {
        setNavbarResponsive(false);
      }
    };

    // Llamada inicial para establecer el estado inicial
    handleResize();

    window.addEventListener('resize', handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
      <Strip />
      <div className='containerNavbar'>
        {!navbarResponsive ? (
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
        ) : (
          /* Navbar resposnive */
          <nav className='navbar'>
            <div className="menuBurguer" onClick={toggleCategorias}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="allContainer">
              <div className='favOption'>
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="imgContainer">
                <a href="/">
                  <img src={ucomLogo} alt="logo" />
                </a>
              </div>
              <div className='optionsContainer'>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-user"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </nav>
        )}



        {/* div de allCategorias deplegable */}
        <div className={`allCategoriasContainer ${expanded ? 'expanded' : ''}`} ref={modalCategorias}>
          <div className="categorias">
            <h2>Categorías</h2>
            {categoriasData.map(categoria => (
              <div key={categoria.id}
                onMouseEnter={() => handleCategoriaHover(categoria)}
                onClick={() => handleCategoriaClick(categoria)}>
                <h3>{categoria.nombre}</h3>
              </div>
            ))}
          </div>
          <div className="subcategorias">
            <h2>Subcategorías de {currentCategoria?.nombre}</h2>
            <ul>
              {currentCategoria?.subcategorias.map((subcategoria, index) => (
                <li key={index}>{subcategoria.nombre}</li>
              ))}
            </ul>
          </div>
          <div className="prodCatVisuales">
            <h2>Productos de {currentCategoria?.nombre}</h2>
            <div className="productos-container">
              {currentCategoria?.subcategorias?.map(subcategoria => (
                <React.Fragment key={subcategoria.id}>
                  {subcategoria?.productos.map((producto, index) => (
                    <div className="producto" key={index}>
                      <img src={producto.imagen} alt={producto.nombre} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
