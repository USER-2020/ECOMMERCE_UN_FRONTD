import "../../styles/header-styles.css";
import imgHeader from '../../assets/others/pexels-rdne-7683872.jpg';

const Header = () => {
    return (
        <div className='containerHeader'>
            <div className="containerChildHeader">
                <div className="containerImgHeader">
                    <img src={imgHeader} alt="img salon" />
                </div>
                <div className="context">
                    <div className="title">
                        <h1>U-commerce</h1>
                        <h3>Conectando Talentos Universitarios</h3>
                    </div>
                    <div className='text'>
                        Explora y apoya productos únicos creados por
                        emprendedores locales estudiantes, conectando
                        así con la creatividad e innovación de la comunidad
                        universitaria. Descubre una variedad de sectores, desde
                        moda hasta tecnología, y fortalece la conexión entre
                        estudiantes y su comunidad a través de emprendimientos
                        innovadores.
                    </div>
                    <div className='button'>
                        <button>Explorar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
