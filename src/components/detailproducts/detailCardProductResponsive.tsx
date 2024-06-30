import { useEffect, useState } from 'react';
import axios from 'axios';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { urlBase } from '../../defaultvalues';
import Swal from 'sweetalert2';
import imgProductPrueba from '../../assets/imgsProductsPrueba/sg-11134201-7rblo-lmubhr7c8hlvac_tn.webp';
import './detailCardProduct.css';

export default function MediaControlCardResponsive() {
    const [product, setProduct] = useState({
        name: "",
        unit_price: 0,
        description: ""
    });
    const [loading, setLoading] = useState(true);
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


    if (loading) {
        return <CircularProgress />;
    }

    // if (error) {
    //     return <Typography variant="body1">{error}</Typography>;
    // }

    return (

        <div className='containerDetailProduct'>
            <div className="detailProductInfo">
                <div className='detailProductTitle'>
                    <h2>{product.name}</h2>
                </div>
                <div className="detailProductImg">
                    <img src={imgProductPrueba} alt="Product" />
                </div>
                <p className='detailProductPrice'> $ {product.unit_price.toLocaleString('es')}</p>
                <p className='detailProductDescription'>Descripción:</p>
                <p className='detailProductLastDescription'>{product.description}</p>
                <div className='detailProductPay'>
                    <p>Opciones de pago</p>
                    <div className='detailProductPayMethods'>
                        <a href="" ><img src="https://cdn.prod.website-files.com/6317a229ebf7723658463b4b/64dfef05bc6705edb9447499_nequi.svg" alt="" /></a>
                        <a href=""><img src="https://media.discordapp.net/attachments/1231013513477226598/1256827086786531369/Daviplata.jpg-removebg.png?ex=66822ef0&is=6680dd70&hm=0f03d750d51ae1784e6ada69c91824ac70e3147b6dc6cd134c6a243eaa35719f&=&format=webp&quality=lossless&width=859&height=504" alt="" /></a>
                        <a href=""><img src="https://yt3.ggpht.com/a/AGF-l79vBaPIFBt4iaGdTrxqAwPcQs-5PzhCcm9lCw=s900-c-k-c0xffffffff-no-rj-mo" alt="" /></a>
                        <a href=""><img src="https://www.pse.com.co/image/layout_icon?img_id=1202326" alt="" /></a>
                    </div>
                </div>
                <div className="detailProductCant">
                    <p>Cantidad:</p>
                    <input type="number" />
                </div>
                <div className="detailProductOpciones">
                    <a className="buyNow" href="#">Comprar ahora</a>
                    <a className="addToCar" href="#">Añadir al carrito</a>
                </div>
            </div>
        </div>

    );
}
