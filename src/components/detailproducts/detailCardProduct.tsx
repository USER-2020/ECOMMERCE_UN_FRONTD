import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { urlBase } from '../../defaultvalues';
import Swal from 'sweetalert2';
import imgProductPrueba from '../../assets/imgsProductsPrueba/sg-11134201-7rblo-lmubhr7c8hlvac_tn.webp';
import './detailCardProduct.css';
import MediaControlCardResponsive from './detailCardProductResponsive';

export default function MediaControlCard() {
    const [product, setProduct] = useState({
        name: "",
        unit_price: 0,
        description: ""
    });
    const [loading, setLoading] = useState(true);
    const [infoCard, setInfoCard] = useState(false);
    const { slug } = useParams();

    const getProductBySlug = () => {
        axios.get(`${urlBase}/products/${slug}`)
            .then((response) => {
                console.log(response.data.data);
                setProduct(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

                });
                setLoading(false);
            });
    }

    useEffect(() => {
        getProductBySlug();
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const maxWidth = 768;
            if (window.innerWidth <= maxWidth) {
                setInfoCard(true);
            } else {
                setInfoCard(false);
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


    if (loading) {
        return <CircularProgress />;
    }

    // if (error) {
    //     return <Typography variant="body1">{error}</Typography>;
    // }

    return (
        <>
            {!infoCard ? (<Card variant="outlined" className='containerDetailProduct'>
                <div className="detailProductImg">
                    <img src={imgProductPrueba} alt="Product" />
                </div>
                <div className="detailProductInfo">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.unit_price}</p>
                    <p>{product.description}</p>
                    <div className="detailProductCant">
                        <p>Cantidad:</p>
                        <input type="number" />
                    </div>
                    <div className="detailProductOpciones">
                        <div className="detailProductOpcionesBuyNow">
                            <a href="#">Comprar ahora</a>
                        </div>
                        <div className="detailProductOpcionesAddToCart">
                            <a href="#">Añadir al carrito</a>
                        </div>
                    </div>
                </div>
            </Card>): (<MediaControlCardResponsive/>) }

        </>

    );
}
